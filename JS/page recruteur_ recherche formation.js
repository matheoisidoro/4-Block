document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour remplir le sélecteur des secteurs
    fetch('/api/secteurs')
      .then(response => response.json())
      .then(data => {
        const secteurSelect = document.getElementById('secteur');
        data.secteurs.forEach(secteur => {
          const option = document.createElement('option');
          option.value = secteur.id;
          option.textContent = secteur.name;
          secteurSelect.appendChild(option);
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des secteurs :', error));
  
    // Fonction pour rechercher et afficher les profils
    document.getElementById('searchButton').addEventListener('click', function() {
      const formationName = document.getElementById('nom_formation').value;
      const secteurId = document.getElementById('secteur').value;
  
      // Requête pour rechercher des formations par nom
      fetch(`/api/formations?name=${encodeURIComponent(formationName)}`)
        .then(response => response.json())
        .then(data => {
          // Si aucune formation n'est trouvée, afficher un message
          if (data.formations.length === 0) {
            document.getElementById('messageContainer').textContent = 'La formation n\'est pas disponible.';
            document.querySelector('#resultsTable tbody').innerHTML = ''; // Effacer les résultats précédents
            return;
          }
  
          const formationId = data.formations[0].id;
  
          // Requête pour rechercher des profils correspondant à la formation et au secteur sélectionnés
          fetch(`/api/profils?formationId=${formationId}&secteurId=${secteurId}`)
            .then(response => response.json())
            .then(data => {
              const resultsTableBody = document.querySelector('#resultsTable tbody');
              resultsTableBody.innerHTML = ''; // Effacer les résultats précédents
              document.getElementById('messageContainer').textContent = ''; // Effacer le message
  
              // Afficher les profils dans le tableau
              data.profils.forEach(profil => {
                const row = document.createElement('tr');
                row.innerHTML = `
                  <td>${profil.prenom}</td>
                  <td>${profil.ecole}</td>
                  <td>${profil.nom_formation}</td>
                  <td>${profil.niveau_etude}</td>
                  <td>${profil.secteur}</td>
                  <td><button class="contact-btn" onclick="window.location.href='contact.html?profilId=${profil.id}'">Contacter</button></td>
                `;
                resultsTableBody.appendChild(row);
              });
            })
            .catch(error => console.error('Erreur lors de la récupération des profils :', error));
        })
        .catch(error => console.error('Erreur lors de la récupération de la formation :', error));
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