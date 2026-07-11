<?php

namespace App\Service\Osm;

/**
 * Parseur streaming d'un fichier .osm (XML OpenStreetMap) extrait par osmium.
 */
class OsmXmlParser
{
    private string $filePath;
    private $reader = null;
    public int $parsedCount = 0;

    public function __construct(string $filePath)
    {
        if (!is_readable($filePath)) {
            throw new \InvalidArgumentException("Fichier OSM illisible : {$filePath}");
        }
        $this->filePath = $filePath;
    }

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

        $currentWayId = null;
        $currentTags = [];
        $currentPoints = [];
        $insideWay = false;
        $nodeIndex = [];
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

    private function classifyWay(?int $id, array $tags, array $points): ?array
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

        if (count($points) < 2) {
            return null;
        }

        return [
            'id' => $id ?? 0,
            'type' => $type,
            'points' => $points,
        ];
    }
}