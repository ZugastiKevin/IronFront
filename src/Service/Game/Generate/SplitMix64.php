<?php

namespace App\Service\Game\Generate;

/**
 * Générateur pseudo-aléatoire déterministe SplitMix64.
 *
 * Implémentation standard (https://prng.di.unimi.it/splitmix64.c) réalisée
 * avec l'extension gmp pour une arithmétique 64 bits exacte (les littéraux
 * 64 bits dépassent PHP_INT_MAX et déclenchent une dépréciation en PHP 8.4).
 *
 * Utilisé par DeterministicResourcePlacer pour un placement de ressources
 * reproductible : même seed → même séquence.
 */
final class SplitMix64
{
    private \GMP $state;

    public function __construct(int $seed)
    {
        // État 64 bits non signé.
        $this->state = gmp_and(gmp_init($seed, 10), gmp_init('0xFFFFFFFFFFFFFFFF', 16));
    }

    /**
     * Entier pseudo-aléatoire dans [0, bound).
     */
    public function nextInt(int $bound): int
    {
        if ($bound <= 0) {
            throw new \InvalidArgumentException('bound must be > 0');
        }

        return (int) gmp_intval(gmp_mod($this->nextValue(), $bound));
    }

    /**
     * Prochaine valeur 64 bits (positive sur 63 bits pour rester dans les
     * entiers PHP signés).
     */
    public function next(): int
    {
        return (int) gmp_intval($this->nextValue());
    }

    private function nextValue(): \GMP
    {
        $this->state = gmp_add($this->state, gmp_init('0x9E3779B97F4A7C15', 16));

        $z = $this->state;
        $z = gmp_and(gmp_xor($z, gmp_div_q($z, gmp_pow(gmp_init(2), 30))), gmp_init('0xFFFFFFFFFFFFFFFF', 16));
        $z = gmp_mul($z, gmp_init('0xBF58476D1CE4E5B9', 16));
        $z = gmp_and(gmp_xor($z, gmp_div_q($z, gmp_pow(gmp_init(2), 27))), gmp_init('0xFFFFFFFFFFFFFFFF', 16));
        $z = gmp_xor($z, gmp_div_q($z, gmp_pow(gmp_init(2), 31)));

        // Positif sur 63 bits (évite le bit de signe PHP).
        return gmp_and($z, gmp_init('0x7FFFFFFFFFFFFFFF', 16));
    }
}
