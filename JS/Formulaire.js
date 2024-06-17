document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.form-container');
    const addFormButton = document.querySelector('.add-form-button');
    let formCount = 1;

    addFormButton.addEventListener('click', () => {
        const newForm = document.createElement('div');
        newForm.classList.add('form');
        newForm.innerHTML = `
            <form id="form-${formCount}">
                <h2>Formulaire sur la Formation</h2>
                <div class="form-row">
                    <label for="nom-ecole-${formCount}">Nom de l'école:</label>
                    <input type="text" id="nom-ecole-${formCount}" name="nom_ecole">
                </div>
                <div class="form-row">
                    <label for="secteur-formation-${formCount}">Secteur de la formation:</label>
                    <select id="secteur-formation-${formCount}" name="secteur">
                        <option value="informatique">Informatique</option>
                        <option value="banque">Banque</option>
                        <option value="agricole">Agricole</option>
                        <option value="medecine">Médecine</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="nom-formation-${formCount}">Nom de la formation:</label>
                    <input type="text" id="nom-formation-${formCount}" name="nom_formation">
                </div>
                <div class="form-row">
                    <label for="niveau-etude-${formCount}">Niveau d'étude:</label>
                    <select id="niveau-etude-${formCount}" name="niveau">
                        <option value="bac">Bac</option>
                        <option value="bac+2">Bac+2</option>
                        <option value="bac+3">Bac+3</option>
                        <option value="bac+5">Bac+5</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="duree-${formCount}">Durée:</label>
                    <select id="duree-${formCount}" name="duree">
                        <option value="2ans">2 ans</option>
                        <option value="3ans">3 ans</option>
                        <option value="5ans">5 ans</option>
                        <option value="5ans">5 ans et plus</option>
                    </select>
                </div>
                <div class="rating">
                <label for="rating">Note de la formation :</label><br>
                <div id="rating">
                    <input type="radio" id="star1-${formCount}" name="rating" value="1"><label for="star1-${formCount}"></label>
                    <input type="radio" id="star2-${formCount}" name="rating" value="2"><label for="star2-${formCount}"></label>
                    <input type="radio" id="star3-${formCount}" name="rating" value="3"><label for="star3-${formCount}"></label>
                    <input type="radio" id="star4-${formCount}" name="rating" value="4"><label for="star4-${formCount}"></label>
                    <input type="radio" id="star5-${formCount}" name="rating" value="5"><label for="star5-${formCount}"></label>
                </div>
            </div>
            </form>
        `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete-form-button');
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            newForm.remove();
        });
        newForm.appendChild(deleteButton);

        formContainer.appendChild(newForm);
        formCount++;
    });

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

        fetch('submit.php', {
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

