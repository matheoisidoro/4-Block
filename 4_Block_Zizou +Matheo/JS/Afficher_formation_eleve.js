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
    // Données statiques des formations
    const formations = [
        {
            id: 1,
            intitule: 'Formation A',
            tag: 'Secteur A'
        },
        {
            id: 2,
            intitule: 'Formation B',
            tag: 'Secteur B'
        },
        {
            id: 3,
            intitule: 'Formation C',
            tag: 'Secteur C'
        }
    ];

    const formContainer = document.getElementById('form-container');

    if (formations.length > 0) {
        formations.forEach(formation => {
            const formRow = document.createElement('div');
            formRow.classList.add('form-row');
            formRow.innerHTML = `
                <div class="formation-info">
                    <input type='text' class='form-input' value='${formation.intitule}' readonly>
                    <input type='text' class='form-input' value='${formation.tag}' readonly>
                </div>
            `;

            formContainer.appendChild(formRow);
        });
    } else {
        formContainer.innerHTML = "Aucune formation trouvée.";
    }
});


/*
////////////////////// affichage formation avec base de donnes///////////// 

document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('form-container');

    // Récupérer les données des formations spécifiques à l'utilisateur
    fetch('get_formations.php', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des formations');
        }
        return response.json();
    })
    .then(formations => {
        if (formations.length > 0) {
            formations.forEach(formation => {
                const formRow = document.createElement('div');
                formRow.classList.add('form-row');
                formRow.innerHTML = `
                    <div class="formation-info">
                        <input type='text' class='form-input' value='${formation.intitule}' readonly>
                        <input type='text' class='form-input' value='${formation.tag}' readonly>
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
        formContainer.innerHTML = "Erreur lors de la récupération des données des formations.";
    });
});
*/
