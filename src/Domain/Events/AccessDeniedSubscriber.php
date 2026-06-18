<?php

namespace App\Domain\Events;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

final class AccessDeniedSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly RouterInterface $router,
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => ['onKernelException', 1],
        ];
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        $exception = $event->getThrowable();
        $request = $event->getRequest();

        if (
            $exception instanceof AccessDeniedException
            && str_starts_with($request->getPathInfo(), '/admin')
        ) {
            $event->setResponse(
                new RedirectResponse(
                    $this->router->generate('home')
                )
            );
        }
    }
}
