export function initBuildingTimers() {
    function updateTimers() {
        document.querySelectorAll('.delivery-timer-wrapper').forEach(el => {
            const scheduledAt = el.dataset.scheduledAt;
            const timerEl     = el.querySelector('.delivery-timer');
            if (!timerEl) return;

            if (!scheduledAt) {
                timerEl.textContent = 'Aucune livraison prévue';
                return;
            }

            const now       = Date.now();
            const scheduled = new Date(scheduledAt).getTime();
            const diffSec   = Math.round((scheduled - now) / 1000);

            if (diffSec > 0) {
                // Livraison pas encore partie
                const mins = Math.floor(diffSec / 60);
                const secs = diffSec % 60;
                timerEl.innerHTML = `Prochain départ dans : <strong>${mins}min ${secs}s</strong>`;
            } else {
                // En transit
                const elapsed = Math.abs(diffSec);
                const mins    = Math.floor(elapsed / 60);
                const secs    = elapsed % 60;
                timerEl.innerHTML = `Convoi en route depuis : <strong>${mins}min ${secs}s</strong>`;
            }
        });
    }

    // Mise à jour chaque seconde
    updateTimers();
    setInterval(updateTimers, 1000);
}

export function formatDate(isoString) {
    return new Date(isoString).toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
    });
}