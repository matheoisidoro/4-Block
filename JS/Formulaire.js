ddocument.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cv').addEventListener('change', function() {
        const cvInfo = document.getElementById('cv-info');
        const file = this.files[0];
        if (file) {
            cvInfo.innerHTML = `<a href="${URL.createObjectURL(file)}" target="_blank">Voir le CV téléchargé : ${file.name}</a>`;
        } else {
            cvInfo.innerHTML = '';
        }
    });

    const formContainer = document.querySelector('.form-container'); // Sélection du conteneur du formulaire
    const addFormButton = document.querySelector('.add-form-button'); // Sélection du bouton "+"

    let formCount = 1; // Initialisation du compteur de formulaires

    addFormButton.addEventListener('click', () => {
        // Création d'un nouveau formulaire
        const newForm = document.createElement('div');
        newForm.classList.add('form');
        newForm.innerHTML = `
            <form id="form-${formCount}">
                <h2>Formulaire sur la Formation</h2>
                <div class="form-row">
                    <label for="nom-ecole-${formCount}">Nom de l'école:</label>
                    <input type="text" id="nom-ecole-${formCount}" name="nom-ecole-${formCount}">
                </div>
                <div class="form-row">
                    <label for="secteur-formation-${formCount}">Secteur de la formation:</label>
                    <select id="secteur-formation-${formCount}" name="secteur-formation-${formCount}">
                        <option value="informatique">Informatique</option>
                        <option value="banque">Banque</option>
                        <option value="agricole">Agricole</option>
                        <option value="medecine">Médecine</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="nom-formation-${formCount}">Nom de la formation:</label>
                    <input type="text" id="nom-formation-${formCount}" name="nom-formation-${formCount}">
                </div>
                <div class="form-row">
                    <label for="niveau-etude-${formCount}">Niveau d'étude:</label>
                    <select id="niveau-etude-${formCount}" name="niveau-etude-${formCount}">
                        <option value="bac">Bac</option>
                        <option value="bac+2">Bac+2</option>
                        <option value="bac+3">Bac+3</option>
                        <option value="bac+5">Bac+5</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="duree-${formCount}">Durée:</label>
                    <select id="duree-${formCount}" name="duree-${formCount}">
                        <option value="2ans">2 ans</option>
                        <option value="3ans">3 ans</option>
                        <option value="5ans">5 ans</option>
                        <option value="5ans">5 ans et plus</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="cv-${formCount}">Insérez votre CV :</label>
                    <input type="file" id="cv-${formCount}" name="cv-${formCount}">
                </div>
                <div class="rating">
                    <label for="rating">Note de la formation :</label><br>
                    <div id="rating">
                        <input type="radio" id="star1" name="rating" value="1"><label for="star1"></label>
                        <input type="radio" id="star2" name="rating" value="2"><label for="star2"></label>
                        <input type="radio" id="star3" name="rating" value="3"><label for="star3"></label>
                        <input type="radio" id="star4" name="rating" value="4"><label for="star4"></label>
                        <input type="radio" id="star5" name="rating" value="5"><label for="star5"></label>
                    </div>
                </div>
            </form>
        `;

        // Ajout d'un bouton de suppression au formulaire
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete-form-button');
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            newForm.remove();
        });
        newForm.appendChild(deleteButton);

        // Ajout du nouveau formulaire au conteneur
        formContainer.appendChild(newForm);

        formCount++; // Incrémentation du compteur de formulaires
    });

    // Ajout d'un écouteur pour le bouton de soumission
    document.getElementById('submit-button').addEventListener('click', () => {
        const forms = document.querySelectorAll('.form form');
        const formData = [];

        forms.forEach((form) => {
            const data = new FormData(form);
            const formObject = {};
            data.forEach((value, key) => {
                formObject[key] = value;
            });
            formData.push(formObject);
        });

        fetch('/submit-forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
