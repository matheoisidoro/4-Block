// Fonction pour basculer l'affichage du menu déroulant
function toggleMenu() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');
}

// Fermer le menu déroulant si l'utilisateur clique en dehors
window.onclick = function(event) {
    if (!event.target.matches('.profile-icon')) {
        const dropdowns = document.getElementsByClassName('profile-dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



// Affichage des données predefini dans la page HTML 
document.addEventListener('DOMContentLoaded', function () {
    // Données statiques des formations avec les notes
    const formations = [
        {
            id: 1,
            ecole: 'École A',
            nom_formation: 'Formation A',
            secteur: 'Secteur A',
            note: 4  // Note de la formation
        },
        {
            id: 2,
            ecole: 'École B',
            nom_formation: 'Formation B',
            secteur: 'Secteur B',
            note: 3  // Note de la formation
        },
        {
            id: 3,
            ecole: 'École C',
            nom_formation: 'Formation C',
            secteur: 'Secteur C',
            note: 5  // Note de la formation
        }
    ];

    const formContainer = document.getElementById('form-container');

    if (formations.length > 0) {
        formations.forEach(formation => {
            const formRow = document.createElement('div');
            formRow.classList.add('form-row');
            formRow.innerHTML = `
                <div class="formation-info">
                    <input type='text' class='form-input' value='${formation.ecole}' readonly>
                    <input type='text' class='form-input' value='${formation.nom_formation}' readonly>
                    <input type='text' class='form-input' value='${formation.secteur}' readonly>
                </div>
                <div class='rating'>
                    ${getStarsHTML(formation.note)}
                </div>
            `;

            formContainer.appendChild(formRow);
        });
    } else {
        formContainer.innerHTML = "Aucune formation trouvée.";
    }
});

// Fonction pour générer le code HTML des étoiles dorées en fonction de la note
function getStarsHTML(note) {
    const starCount = 5;
    let starsHTML = '';

    for (let i = 1; i <= starCount; i++) {
        if (i <= note) {
            starsHTML += `<label class='star'>&#9733;</label>`; // Étoile dorée pleine
        } else {
            starsHTML += `<label class='star'>&#9734;</label>`; // Étoile dorée vide
        }
    }

    return starsHTML;
}

// affichage formation avec base de donnes 
/*document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les données des formations spécifiques à l'utilisateur (exemple de données)
    fetch('https://api.monserveur.com/formations-utilisateur', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer votre_token_jwt'
            // Ajoutez d'autres en-têtes si nécessaire
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des formations');
        }
        return response.json();
    })
    .then(formations => {
        const formContainer = document.getElementById('form-container');

        if (formations.length > 0) {
            formations.forEach(formation => {
                const formRow = document.createElement('div');
                formRow.classList.add('form-row');
                formRow.innerHTML = `
                    <div class="formation-info">
                        <input type='text' class='form-input' value='${formation.ecole}' readonly>
                        <input type='text' class='form-input' value='${formation.nom_formation}' readonly>
                        <input type='text' class='form-input' value='${formation.secteur}' readonly>
                    </div>
                    <div class='rating'>
                        ${getStarsHTML(formation.note)}
                    </div>
                `;

                formContainer.appendChild(formRow);
            });
        } else {
            formContainer.innerHTML = "Aucune formation trouvée.";
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données des formations :', error);
        const formContainer = document.getElementById('form-container');
        formContainer.innerHTML = "Erreur lors de la récupération des données des formations.";
    });
});

// Fonction pour générer le code HTML des étoiles dorées en fonction de la note
function getStarsHTML(note) {
    const starCount = 5;
    let starsHTML = '';

    for (let i = 1; i <= starCount; i++) {
        if (i <= note) {
            starsHTML += `<label class='star'>&#9733;</label>`; // Étoile dorée pleine
        } else {
            starsHTML += `<label class='star'>&#9734;</label>`; // Étoile dorée vide
        }
    }

    return starsHTML;
}*/
