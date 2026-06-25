let timerInterval = null;

export function initBuildingTimers() {

    if (timerInterval) return; // évite doublons

    function updateTimers() {
        document.querySelectorAll('.delivery-timer-wrapper').forEach(el => {
            const scheduledAt = el.dataset.scheduledAt;
            const timerEl = el.querySelector('.delivery-timer');
            if (!timerEl) return;

            if (!scheduledAt) {
                timerEl.textContent = 'Aucune livraison prévue';
                return;
            }

            const now = Date.now();
            const scheduled = new Date(scheduledAt).getTime();

            if (isNaN(scheduled)) {
                timerEl.textContent = 'Date invalide';
                return;
            }

            const diffSec = Math.floor((scheduled - now) / 1000);

            if (diffSec > 0) {
                const mins = Math.floor(diffSec / 60);
                const secs = diffSec % 60;
                timerEl.innerHTML = `Prochain départ dans : <strong>${mins}min ${secs}s</strong>`;
            } else {
                const elapsed = Math.abs(diffSec);
                const mins = Math.floor(elapsed / 60);
                const secs = elapsed % 60;
                timerEl.innerHTML = `Convoi en route depuis : <strong>${mins}min ${secs}s</strong>`;
            }
        });
    }

    updateTimers();
    timerInterval = setInterval(updateTimers, 1000);
}

export function formatDate(isoString) {
    return new Date(isoString).toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
    });
}