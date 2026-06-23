export function initNotifications()
{
    document.body.addEventListener('htmx:afterSwap', (e) => {
        const events = document.querySelectorAll('[data-event]');
        events.forEach(el => {
            try {
                const event = JSON.parse(el.dataset.event);
                document.dispatchEvent(new CustomEvent('game:event', { detail: event }));
            } catch (err) {
                console.error('Erreur parsing event:', err);
            } finally {
                el.remove();
            }
        });
    });
}

export function showNotification(message, type = 'info') {

    const notif = document.createElement('div');
    notif.className = `notif notif-${type}`;
    notif.textContent = message;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}