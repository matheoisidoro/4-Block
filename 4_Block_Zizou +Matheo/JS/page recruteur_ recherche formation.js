/*document.addEventListener('DOMContentLoaded', function() {
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
}*/

// avec données pes définie 
document.addEventListener('DOMContentLoaded', function() {
  // Données statiques pour simuler les secteurs
  const secteursData = [
    { id: 1, name: 'Informatique' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Marketing' },
    // Ajoutez d'autres secteurs si nécessaire
  ];

  // Remplir le sélecteur des secteurs avec les données statiques
  const secteurSelect = document.getElementById('secteur');
  secteursData.forEach(secteur => {
    const option = document.createElement('option');
    option.value = secteur.id;
    option.textContent = secteur.name;
    secteurSelect.appendChild(option);
  });

  // Fonction pour rechercher et afficher les profils
  document.getElementById('searchButton').addEventListener('click', function() {
    const formationName = document.getElementById('nom_formation').value.toLowerCase();
    const secteurId = document.getElementById('secteur').value;

    // Simuler les données de formation
    const formationsData = {
      formations: [
        { id: 1, nom_formation: 'Développeur Web', secteur_id: 1 },
        { id: 2, nom_formation: 'Analyste financier', secteur_id: 2 },
        { id: 3, nom_formation: 'Chef de produit', secteur_id: 3 },
        // Ajoutez d'autres formations si nécessaire
      ]
    };

    // Trouver l'ID de la formation en fonction du nom saisi
    const foundFormation = formationsData.formations.find(f => f.nom_formation.toLowerCase().includes(formationName) && f.secteur_id == secteurId);

    if (!foundFormation) {
      document.getElementById('messageContainer').textContent = 'Aucune formation trouvée pour les critères spécifiés. Il manque peut être le secteur';
      document.querySelector('#resultsTable tbody').innerHTML = ''; // Effacer les résultats précédents
      return;
    }

    const formationId = foundFormation.id;

    // Simuler les profils correspondant à la formation et au secteur sélectionnés
    const profilsData = {
      profils: [
        { id: 1, prenom: 'Jean', ecole: 'Université A', nom_formation: 'Développeur Web', niveau_etude: 'Bac+5', secteur_id: 1, email: 'isidoro.matheo@gmail.com' },
        { id: 2, prenom: 'Marie', ecole: 'Université B', nom_formation: 'Analyste financier', niveau_etude: 'Bac+4', secteur_id: 2, email: 'marie@example.com' },
        { id: 3, prenom: 'Pierre', ecole: 'Université C', nom_formation: 'Chef de produit', niveau_etude: 'Bac+5', secteur_id: 3, email: 'pierre@example.com' },
        // Ajoutez d'autres profils si nécessaire
      ]
    };

    const resultsTableBody = document.querySelector('#resultsTable tbody');
    resultsTableBody.innerHTML = ''; // Effacer les résultats précédents
    document.getElementById('messageContainer').textContent = ''; // Effacer le message

    // Filtrer les profils par secteur sélectionné
    const filteredProfils = profilsData.profils.filter(profil => profil.nom_formation.toLowerCase().includes(formationName) && profil.secteur_id == secteurId);

    if (filteredProfils.length === 0) {
      document.getElementById('messageContainer').textContent = 'Aucun profil trouvé pour les critères spécifiés.';
      return;
    }

    // Afficher les profils dans le tableau
    filteredProfils.forEach(profil => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${profil.prenom}</td>
        <td>${profil.ecole}</td>
        <td>${profil.nom_formation}</td>
        <td>${profil.niveau_etude}</td>
        <td>${secteursData.find(s => s.id == profil.secteur_id).name}</td>
        <td>${profil.email}</td>
        <td><button class="contact-btn" onclick="window.location.href='Recruteur_Formulaire_de_contact.html?profilId=${profil.id}'">Contacter</button></td>
      `;
      resultsTableBody.appendChild(row);
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
