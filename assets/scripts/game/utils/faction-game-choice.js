function initSelection() {
    document.querySelectorAll('.game-card').forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
            radio.addEventListener('change', function () {
                document.querySelectorAll('.game-card').forEach(c => c.classList.remove('selected'));
                if (this.checked) {
                    card.classList.add('selected');
                    selectGame(this.value, card.dataset.gameLabel);
                }
            });
        }
    });

    document.querySelectorAll('.faction-card').forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
            radio.addEventListener('change', function () {
                document.querySelectorAll('.faction-card').forEach(c => c.classList.remove('selected'));
                if (this.checked) card.classList.add('selected');
            });
        }
    });

    // Bouton "Changer de game"
    document.getElementById('btn-change-game')?.addEventListener('click', resetGameSelection);

    // Au chargement si une game est déjà cochée
    const checkedGame = document.querySelector('.game-card input[type="radio"]:checked');
    if (checkedGame) {
        const card = checkedGame.closest('.game-card');
        card?.classList.add('selected');
        selectGame(checkedGame.value, card?.dataset.gameLabel ?? '');
    }
}

function selectGame(gameId, gameLabel) {
    // Changer le titre
    document.getElementById('form-title').textContent = 'Choisissez votre faction';

    // Réduire la grille des games → afficher le résumé compact
    document.getElementById('games-grid').style.display = 'none';
    document.getElementById('game-selected-summary').style.display = 'flex';
    document.getElementById('game-selected-label').textContent = gameLabel;

    // Afficher la section factions et le séparateur
    document.getElementById('factions-section').style.display = '';
    document.getElementById('submit-btn').style.display = '';

    handleGameSelection(gameId);
}

function resetGameSelection() {
    // Remettre le titre initial
    document.getElementById('form-title').textContent = 'Choisissez une partie';

    // Réafficher la grille des games
    document.getElementById('games-grid').style.display = '';
    document.getElementById('game-selected-summary').style.display = 'none';

    // Masquer factions
    document.getElementById('factions-section').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';

    // Décocher toutes les games
    document.querySelectorAll('.game-card').forEach(c => {
        c.classList.remove('selected');
        const r = c.querySelector('input[type="radio"]');
        if (r) r.checked = false;
    });

    // Réinitialiser les factions
    document.querySelectorAll('.faction-card').forEach(card => {
        card.style.display = '';
        card.classList.remove('selected');
        const r = card.querySelector('input[type="radio"]');
        if (r) r.checked = false;
    });
}

function handleGameSelection(gameId) {
    const existing = window.existingPlayers ?? {};
    const factionCards = document.querySelectorAll('.faction-card');
    const factionsGrid = document.querySelector('.factions-grid');

    if (existing[gameId] !== undefined) {
        const playerFaction = existing[gameId];
        let visibleCount = 0;

        factionCards.forEach(card => {
            const radio = card.querySelector('input[type="radio"]');
            const factionCode = radio?.dataset.code;

            if (factionCode === playerFaction) {
                card.style.display = '';
                card.classList.add('selected');
                if (radio) radio.checked = true;
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.classList.remove('selected');
                if (radio) radio.checked = false;
            }
        });

        if (factionsGrid) {
            if (visibleCount === 1) {
                factionsGrid.style.gridTemplateColumns = 'minmax(0, 400px)';
                factionsGrid.style.justifyContent = 'center';
            } else if (visibleCount === 2) {
                factionsGrid.style.gridTemplateColumns = 'repeat(2, minmax(0, 400px))';
                factionsGrid.style.justifyContent = 'center';
            } else {
                factionsGrid.style.gridTemplateColumns = '';
                factionsGrid.style.justifyContent = '';
            }
        }

    } else {
        factionCards.forEach(card => {
            card.style.display = '';
            card.classList.remove('selected');
            const radio = card.querySelector('input[type="radio"]');
            if (radio) radio.checked = false;
        });

        if (factionsGrid) {
            factionsGrid.style.gridTemplateColumns = '';
            factionsGrid.style.justifyContent = '';
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSelection);
} else {
    initSelection();
}