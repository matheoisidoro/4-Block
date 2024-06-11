document.addEventListener('DOMContentLoaded', function () {
    fetch('server.php')
        .then(response => response.json())
        .then(formations => {
            const formContainer = document.getElementById('form-container');

            if (formations.length > 0) {
                formations.forEach(formation => {
                    // Créer les éléments HTML pour chaque formation
                    const formRow1 = document.createElement('div');
                    formRow1.classList.add('form-row');
                    formRow1.innerHTML = `
                        <input type='text' class='form-input' value='${formation.ecole}' readonly>
                        <input type='text' class='form-input' value='${formation.nom_formation}' readonly>
                        <input type='text' class='form-input' value='${formation.secteur}' readonly>
                    `;

                    const formRow2 = document.createElement('div');
                    formRow2.classList.add('form-row');
                    formRow2.innerHTML = `
                        <div class='rating'>
                            <input type='radio' name='rating_${formation.id}' id='star_${formation.id}_1' class='star' value='1'>
                            <label for='star_${formation.id}_1' class='star'>★</label>
                            <input type='radio' name='rating_${formation.id}' id='star_${formation.id}_2' class='star' value='2'>
                            <label for='star_${formation.id}_2' class='star'>★</label>
                            <input type='radio' name='rating_${formation.id}' id='star_${formation.id}_3' class='star' value='3'>
                            <label for='star_${formation.id}_3' class='star'>★</label>
                            <input type='radio' name='rating_${formation.id}' id='star_${formation.id}_4' class='star' value='4'>
                            <label for='star_${formation.id}_4' class='star'>★</label>
                            <input type='radio' name='rating_${formation.id}' id='star_${formation.id}_5' class='star' value='5'>
                            <label for='star_${formation.id}_5' class='star'>★</label>
                        </div>
                        <input type='text' class='form-input note' name='note_${formation.id}' placeholder='Note de la formation'>
                    `;

                    formContainer.appendChild(formRow1);
                    formContainer.appendChild(formRow2);
                });
            } else {
                formContainer.innerHTML = "Aucune formation trouvée.";
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des formations :', error);
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

// Fonction de déconnexion
function logout() {
    // Suppression des informations de session du stockage local
    localStorage.removeItem('session');
    sessionStorage.removeItem('session');

    login = 'page_de_connexion.html';

    // Redirection vers la page de connexion
    window.location.href = 'page_de_connexion.html';

    // Bloquer le retour en arrière
    window.history.pushState(null, null, 'page_de_connexion.html');
    window.addEventListener('popstate', function(event) {
        window.history.pushState(null, null, 'page_de_connexion.html');
    });
}


