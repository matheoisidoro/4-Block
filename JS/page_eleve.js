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