<?php

namespace App\Service\Osm;

/**
 * Parseur streaming d'un fichier .osm (XML OpenStreetMap) extrait par osmium.
 *
 * Itère sur les <way> et ne retient que ceux porteurs d'un tag
 * k="highway" (toute valeur) ou k="route" v="ferry" — exactement le
 * sous-routier qu'on veut pour le jeu : toutes les routes terrestres
 * + les lignes maritimes (ferry).
 *
 * L'itération est "générateur" (yield) : un tour de boucle = un way.
 * Les points de <way> sont donnés directement en lat/lon (fichiers issus
 * d'osmium export, plus simple que de résoudre les <node>).
 */
class OsmXmlParser
{
    /** @var string Chemin vers le .osm (ou .osm.pbf parsable comme XML) */
    private string $filePath;

    /** @var resource|null Handle XMLReader courant */
    private $reader = null;

    /** @var int Compteur de ways élus (debug) */
    public int $parsedCount = 0;

    public function __construct(string $filePath)
    {
        if (!is_readable($filePath)) {
            throw new \InvalidArgumentException("Fichier OSM illisible : {$filePath}");
        }
        $this->filePath = $filePath;
    }

    /**
     * Ferme le parser (appel explicite ou via destructeur).
     */
    public function close(): void
    {
        if ($this->reader instanceof \XMLReader) {
            $this->reader->close();
            $this->reader = null;
        }
    }

    public function __destruct()
    {
        $this->close();
    }

    /**
     * Itère sur les <way> routiers du fichier.
     *
     * @return \Generator<int, array{id: int, type: string, points: list<array{0: float, 1: float}>}>
     */
    public function iterateRoads(): \Generator
    {
        $reader = new \XMLReader();
        if (!$reader->open($this->filePath)) {
            throw new \RuntimeException("Impossible d'ouvrir en XML : {$this->filePath}");
        }
        $this->reader = $reader;

        // Structure OSM XML :
        // <osm>
        //   <node id=.. lat=../>  (présents si export complet, sinon référencés)
        //   <way id=..>
        //     <nd ref=../>
        //     <tag k="highway" v="primary"/>
        //   </way>
        //
        // On lit chaque élément ; dès qu'on entre dans un <way>, on
        // collecte les nd[@lat,@lon] ET les <tag> pour décider.

        $currentWayId = null;
        $currentTags = [];
        $currentPoints = [];   // points collectés (lat, lon)
        $insideWay = false;
        $hasNodes = false;     // vrai si le fichier contient des <node> avec coords
        $nodeIndex = [];       // id => [lat, lon]  (si présent)
        $depth = 0;

        while ($reader->read()) {
            $nodeType = $reader->nodeType;

            if ($nodeType === \XMLReader::ELEMENT) {
                $name = $reader->name;

                if ($name === 'node') {
                    $id = (int) $reader->getAttribute('id');
                    $lat = $reader->getAttribute('lat');
                    $lon = $reader->getAttribute('lon');
                    if ($lat !== null && $lon !== null) {
                        $nodeIndex[$id] = [(float) $lat, (float) $lon];
                    }
                    // node est vide-fermé en OSM XML → pas d'END_ELEMENT à traiter
                    continue;
                }

                if ($name === 'way') {
                    $insideWay = true;
                    $currentWayId = (int) $reader->getAttribute('id');
                    $currentTags = [];
                    $currentPoints = [];
                    $depth = $reader->depth;
                    continue;
                }

                if ($insideWay && $name === 'nd') {
                    $ref = $reader->getAttribute('ref');
                    $lat = $reader->getAttribute('lat');
                    $lon = $reader->getAttribute('lon');
                    if ($lat !== null && $lon !== null) {
                        // Format "densifié" : coords directement sur <nd>
                        $currentPoints[] = [(float) $lat, (float) $lon];
                    } elseif ($ref !== null && isset($nodeIndex[(int) $ref])) {
                        $currentPoints[] = $nodeIndex[(int) $ref];
                    }
                    continue;
                }

                if ($insideWay && $name === 'tag') {
                    $k = $reader->getAttribute('k');
                    $v = $reader->getAttribute('v');
                    if ($k !== null) {
                        $currentTags[$k] = $v;
                    }
                    continue;
                }

                continue;
            }

            if ($nodeType === \XMLReader::END_ELEMENT && $reader->name === 'way' && $insideWay) {
                $this->parsedCount++;
                $insideWay = false;

                $road = $this->classifyWay($currentWayId, $currentTags, $currentPoints);
                if ($road !== null) {
                    yield $road;
                }
                continue;
            }
        }

        $this->close();
    }

    /**
     * Décide si un <way> est une route/ferry, et renvoie sa classification.
     *
     * @param array<string,string> $tags
     * @param list<array{0: float, 1: float}> $points
     * @return array{id: int, type: string, points: list<array{0: float, 1: float}>}|null
     */
    private function classifyWay(int $id, array $tags, array $points): ?array
    {
        $highway = $tags['highway'] ?? null;
        $route = $tags['route'] ?? null;

        $type = null;
        if ($highway !== null && $highway !== 'no') {
            $type = $highway;
        } elseif ($route === 'ferry') {
            $type = 'ferry';
        }

        if ($type === null) {
            return null;
        }

        // Une route doit avoir au moins 2 points.
        if (count($points) < 2) {
            return null;
        }

        return [
            'id' => $id,
            'type' => $type,
            'points' => $points,
        ];
    }
}
