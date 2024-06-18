document.addEventListener('DOMContentLoaded', () => {
    const conteneurFormulaire = document.querySelector('.conteneur-formulaire');
    const boutonAjouterFormulaire = document.querySelector('.ajouter-formulaire-bouton');
    let compteurFormulaires = 1;

    boutonAjouterFormulaire.addEventListener('click', () => {
        ajouterFormulaire();
    });

    function ajouterFormulaire() {
        const nouveauFormulaire = document.createElement('div');
        nouveauFormulaire.classList.add('formulaire');
        nouveauFormulaire.innerHTML = `
            <form id="formulaire-${compteurFormulaires}">
                <h2>Formulaire sur la Formation</h2>
                <div class="rangée-formulaire">
                    <label for="tag-${compteurFormulaires}">Un tag de votre formation :</label>
                    <input type="text" id="tag-${compteurFormulaires}" name="tag" required>
                </div>
                <div class="rangée-formulaire">
                    <label for="intitule-${compteurFormulaires}">Nom de la formation :</label>
                    <input type="text" id="intitule-${compteurFormulaires}" name="intitule" required>
                </div>
            </form>
        `;

        const boutonSupprimer = document.createElement('button');
        boutonSupprimer.textContent = 'Supprimer';
        boutonSupprimer.classList.add('supprimer-formulaire-bouton');
        boutonSupprimer.addEventListener('click', (e) => {
            e.preventDefault();
            nouveauFormulaire.remove();
        });
        nouveauFormulaire.appendChild(boutonSupprimer);

        conteneurFormulaire.appendChild(nouveauFormulaire);
        compteurFormulaires++;
    }

    document.getElementById('bouton-valider').addEventListener('click', () => {
        const formulaires = document.querySelectorAll('.formulaire form, #formulaire-principal');
        const donneesFormulaire = [];

        formulaires.forEach((formulaire) => {
            const donnees = new FormData(formulaire);
            const objetFormulaire = {};
            donnees.forEach((valeur, cle) => {
                objetFormulaire[cle] = valeur;
            });
            donneesFormulaire.push(objetFormulaire);
        });

        fetch('submit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donneesFormulaire),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès :', data);
            window.location.href = 'merci_eleve.html';
        })
        .catch((error) => {
            console.error('Erreur :', error);
        });
    });
});

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
