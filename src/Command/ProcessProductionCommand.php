<?php

namespace App\Command;

use App\Message\ProcessProductionMessage;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Messenger\MessageBusInterface;

#[AsCommand(
    name: 'game:process-production',
    description: 'Process production and deliveries for all players.',
)]
class ProcessProductionCommand extends Command
{
    public function __construct(
        private readonly MessageBusInterface $bus,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('<info>Processing production...</info>');

        $this->bus->dispatch(new ProcessProductionMessage());

        $output->writeln('<info>Production processed successfully.</info>');

        return Command::SUCCESS;
    }
}