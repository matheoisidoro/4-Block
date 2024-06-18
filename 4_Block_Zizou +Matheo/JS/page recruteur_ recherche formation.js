/*document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour remplir le sélecteur des tags
  fetch('/api/tags')
    .then(response => response.json())
    .then(data => {
      const tagSelect = document.getElementById('tag');
      data.tags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag.id;
        option.textContent = tag.name;
        tagSelect.appendChild(option);
      });
    })
    .catch(error => console.error('Erreur lors de la récupération des tags :', error));

  // Fonction pour rechercher et afficher les profils
  document.getElementById('searchButton').addEventListener('click', function() {
    const formationName = document.getElementById('intitule').value;
    const tagId = document.getElementById('tag').value;

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

        // Requête pour rechercher des profils correspondant à la formation et au tag sélectionnés
        fetch(`/api/profils?formationId=${formationId}&tagId=${tagId}`)
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
                <td>${profil.intitule}</td>
                <td>${profil.tag}</td>
                <td>${profil.email}</td>
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
*/

document.addEventListener('DOMContentLoaded', function() {
  // Données statiques pour simuler les tags
  const tagsData = [
    { id: 1, name: 'web' },
    { id: 2, name: 'java' },
    { id: 3, name: 'cybersécuriter' },
    // Ajoutez d'autres tags si nécessaire
  ];

  // Remplir le sélecteur des tags avec les données statiques
  const tagSelect = document.getElementById('tag');
  tagsData.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag.id;
    option.textContent = tag.name;
    tagSelect.appendChild(option);
  });

  // Fonction pour rechercher et afficher les profils
  document.getElementById('searchButton').addEventListener('click', function() {
    const formationName = document.getElementById('intitule').value.toLowerCase();
    const tagId = document.getElementById('tag').value;

    // Simuler les données de formation
    const formationsData = {
      formations: [
        { id: 1, intitule: 'Développeur Web', tag_id: 1 },
        { id: 2, intitule: 'Développeur java', tag_id: 2 },
        { id: 3, intitule: 'Ingenier Cybersécuriter', tag_id: 3 },
        // Ajoutez d'autres formations si nécessaire
      ]
    };

    // Trouver l'ID de la formation en fonction du nom saisi
    const foundFormation = formationsData.formations.find(f => f.intitule.toLowerCase().includes(formationName) && f.tag_id == tagId);

    if (!foundFormation) {
      document.getElementById('messageContainer').textContent = 'Aucune formation trouvée pour les critères spécifiés. Il manque peut être le tag';
      document.querySelector('#resultsTable tbody').innerHTML = ''; // Effacer les résultats précédents
      return;
    }

    const formationId = foundFormation.id;

    // Simuler les profils correspondant à la formation et au tag sélectionnés
    const profilsData = {
      profils: [
        { id: 1, prenom: 'Jean', intitule: 'Développeur Web', tag_id: 1, email: 'isi.math@gmail.com' },
        { id: 2, prenom: 'Marie', intitule: 'Développeur java', tag_id: 2, email: 'marie@example.com' },
        { id: 3, prenom: 'Pierre', intitule: 'Ingenier Cybersécuriter', tag_id: 3, email: 'pierre@example.com' },
        { id: 4, prenom: 'Leonar', intitule: 'Ingenier Cybersécuriter', tag_id: 4, email: 'leonard@example.com' },
        // Ajoutez d'autres profils si nécessaire
      ]
    };

    const resultsTableBody = document.querySelector('#resultsTable tbody');
    resultsTableBody.innerHTML = ''; // Effacer les résultats précédents
    document.getElementById('messageContainer').textContent = ''; // Effacer le message

    // Filtrer les profils par tag sélectionné
    const filteredProfils = profilsData.profils.filter(profil => profil.intitule.toLowerCase().includes(formationName) && profil.tag_id == tagId);

    if (filteredProfils.length === 0) {
      document.getElementById('messageContainer').textContent = 'Aucun profil trouvé pour les critères spécifiés.';
      return;
    }

    // Afficher les profils dans le tableau
    filteredProfils.forEach(profil => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${profil.prenom}</td>
        <td>${profil.intitule}</td>
        <td>${tagsData.find(s => s.id == profil.tag_id).name}</td>
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
