/*document.addEventListener('DOMContentLoaded', () => {
    const conteneurFormulaire = document.querySelector('.conteneur-formulaire');
    const boutonAjouterFormulaire = document.querySelector('.ajouter-formulaire-bouton');
    let compteurFormulaires = 1;

    boutonAjouterFormulaire.addEventListener('click', () => {
        const nouveauFormulaire = document.createElement('div');
        nouveauFormulaire.classList.add('formulaire');
        nouveauFormulaire.innerHTML = `
            <form id="formulaire-${compteurFormulaires}">
                <h2>Formulaire sur la Formation</h2>
                <div class="rangée-formulaire">
                    <label for="nom-ecole-${compteurFormulaires}">Nom de l'école :</label>
                    <input type="text" id="nom-ecole-${compteurFormulaires}" name="nom_ecole">
                </div>
                <div class="rangée-formulaire">
                    <label for="secteur-formation-${compteurFormulaires}">Secteur de la formation :</label>
                    <select id="secteur-formation-${compteurFormulaires}" name="secteur">
                        <option value="informatique">Informatique</option>
                        <option value="banque">Banque</option>
                        <option value="agricole">Agricole</option>
                        <option value="medecine">Médecine</option>
                    </select>
                </div>
                <div class="rangée-formulaire">
                    <label for="nom-formation-${compteurFormulaires}">Nom de la formation :</label>
                    <input type="text" id="nom-formation-${compteurFormulaires}" name="nom_formation">
                </div>
                <div class="rangée-formulaire">
                    <label for="niveau-etude-${compteurFormulaires}">Niveau d'étude :</label>
                    <select id="niveau-etude-${compteurFormulaires}" name="niveau">
                        <option value="bac">Bac</option>
                        <option value="bac+2">Bac+2</option>
                        <option value="bac+3">Bac+3</option>
                        <option value="bac+5">Bac+5</option>
                    </select>
                </div>
                <div class="rangée-formulaire">
                    <label for="duree-${compteurFormulaires}">Durée :</label>
                    <select id="duree-${compteurFormulaires}" name="duree">
                        <option value="2ans">2 ans</option>
                        <option value="3ans">3 ans</option>
                        <option value="5ans">5 ans</option>
                        <option value="5ans">5 ans et plus</option>
                    </select>
                </div>
                <div class="notation">
                    <label for="notation">Note de la formation :</label><br>
                    <div id="notation">
                        <input type="radio" id="star1-${compteurFormulaires}" name="notation" value="1"><label for="star1-${compteurFormulaires}"></label>
                        <input type="radio" id="star2-${compteurFormulaires}" name="notation" value="2"><label for="star2-${compteurFormulaires}"></label>
                        <input type="radio" id="star3-${compteurFormulaires}" name="notation" value="3"><label for="star3-${compteurFormulaires}"></label>
                        <input type="radio" id="star4-${compteurFormulaires}" name="notation" value="4"><label for="star4-${compteurFormulaires}"></label>
                        <input type="radio" id="star5-${compteurFormulaires}" name="notation" value="5"><label for="star5-${compteurFormulaires}"></label>
                    </div>
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
    });

    document.getElementById('bouton-valider').addEventListener('click', () => {
        const formulaires = document.querySelectorAll('.formulaire form');
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
        })
        .catch((error) => {
            console.error('Erreur :', error);
        });
    });
});*/

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
                    <label for="nom-ecole-${compteurFormulaires}">Nom de l'école :</label>
                    <input type="text" id="nom-ecole-${compteurFormulaires}" name="nom_ecole" required>
                </div>
                <div class="rangée-formulaire">
                    <label for="secteur-formation-${compteurFormulaires}">Secteur de la formation :</label>
                    <select id="secteur-formation-${compteurFormulaires}" name="secteur" required>
                        <option value="informatique">Informatique</option>
                        <option value="banque">Banque</option>
                        <option value="agricole">Agricole</option>
                        <option value="medecine">Médecine</option>
                    </select>
                </div>
                <div class="rangée-formulaire">
                    <label for="nom-formation-${compteurFormulaires}">Nom de la formation :</label>
                    <input type="text" id="nom-formation-${compteurFormulaires}" name="nom_formation" required>
                </div>
                <div class="rangée-formulaire">
                    <label for="niveau-etude-${compteurFormulaires}">Niveau d'étude :</label>
                    <select id="niveau-etude-${compteurFormulaires}" name="niveau" required>
                        <option value="bac">Bac</option>
                        <option value="bac+2">Bac+2</option>
                        <option value="bac+3">Bac+3</option>
                        <option value="bac+5">Bac+5</option>
                    </select>
                </div>
                <div class="rangée-formulaire">
                    <label for="duree-${compteurFormulaires}">Durée :</label>
                    <select id="duree-${compteurFormulaires}" name="duree" required>
                        <option value="2ans">2 ans</option>
                        <option value="3ans">3 ans</option>
                        <option value="5ans">5 ans</option>
                        <option value="5ansplus">5 ans et plus</option>
                    </select>
                </div>
                <div class="notation">
                    <label for="notation">Note de la formation :</label><br>
                    <div id="notation">
                        <input type="radio" id="star1-${compteurFormulaires}" name="notation" value="1" required><label for="star1-${compteurFormulaires}"></label>
                        <input type="radio" id="star2-${compteurFormulaires}" name="notation" value="2"><label for="star2-${compteurFormulaires}"></label>
                        <input type="radio" id="star3-${compteurFormulaires}" name="notation" value="3"><label for="star3-${compteurFormulaires}"></label>
                        <input type="radio" id="star4-${compteurFormulaires}" name="notation" value="4"><label for="star4-${compteurFormulaires}"></label>
                        <input type="radio" id="star5-${compteurFormulaires}" name="notation" value="5"><label for="star5-${compteurFormulaires}"></label>
                    </div>
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
        const formulaires = document.querySelectorAll('.formulaire form');
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
            // Redirige vers une autre page après le succès de l'envoi des données
            window.location.href = 'merci_eleve.html';
        })
        .catch((error) => {
            console.error('Erreur :', error);
        });
    });
});




