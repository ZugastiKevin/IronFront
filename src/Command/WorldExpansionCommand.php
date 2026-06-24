<?php
namespace App\Command;

use App\Service\Game\Generate\WorldExpansionService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Psr\Cache\CacheItemPoolInterface;

#[AsCommand(
    name: 'game:world-expansion',
    description: 'Exécute une passe d\'expansion du monde (appelé par le cron).',
)]
class WorldExpansionCommand extends Command
{
    public function __construct(
        private readonly WorldExpansionService $worldExpansionService,
        private readonly CacheItemPoolInterface $cache,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $result = $this->worldExpansionService->expand();
        $this->cache->clear();
        $output->writeln(
            ($result ? '✅ Expansion OK' : '➖ Rien à étendre') 
            . ' — ' . (new \DateTimeImmutable())->format('H:i:s')
        );
        return Command::SUCCESS;
    }
}