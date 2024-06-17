////////////////////////// page de creation ///////////////////////////////////

function signup(e, formEl) { 
  e.preventDefault();

  // Récupération des données saisies par l'utilisateur dans le HTML
  let prenom = document.querySelector("#prénome").value;
  let username = document.querySelector("#signupUsernameInput").value;
  let password = document.querySelector("#signUpPasswordInput").value;
  let anniversaire = document.querySelector("#anniversaire").value;
  let sexe = document.querySelector("#sexe").value;
  let status = document.querySelector("#status").value;
  let email = document.querySelector("#email").value;

  let data = {
    prenom: prenom,
    username: username,
    password: password,
    anniversaire: anniversaire,
    sexe: sexe,
    status: status,
    email: email,
  };

  // fetch(url) va faire une requête vers l'URL passé en paramètre
  fetch("http://localhost:5000/api/user/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json().then((json) => {
        console.log(json);
        if (json.success) {
          alert("Compte créé avec succès !");
          // Rediriger vers une autre page si nécessaire
          window.location.href = "page_de_connexion.html";
        } else {
          alert("Erreur lors de la création du compte : " + json.message);
        }
      });
    })
    .catch((error) => {
      console.error("Erreur lors de l'inscription :", error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    });
}

////////////////// page de connexion/////////////////////////////////

function login(e) {
  e.preventDefault();

  // Utilisateur prédéfini
  /*let predefinedUsername = "recruteur";
  let predefinedPassword = "recruteur";
  let predefinedRole = "recruteur"; */

 /* let predefinedUsername = "prof";
  let predefinedPassword = "prof";
  let predefinedRole = "professeur"; */

  let predefinedUsername = "etudiant";
  let predefinedPassword = "etudiant";
  let predefinedRole = "etudiant"; 

  // Récupérer les valeurs des champs d'entrée si nécessaire
  // let username = document.querySelector("#loginUsernameInput").value;
  // let password = document.querySelector("#loginPasswordInput").value;

  let data = {
    username: predefinedUsername,
    password: predefinedPassword
  };

  // Simuler une requête de connexion (remplacer par fetch ou axios selon vos besoins)
  // Ici, nous utilisons setTimeout pour simuler une attente réseau
  setTimeout(() => {
    if (data.username === predefinedUsername && data.password === predefinedPassword) {
      // Connexion réussie
      alert("Connexion réussie !");
      // Utiliser le rôle prédéfini ici
      if (predefinedRole === "etudiant") {
        window.location.href = "Eleve_Afficher_formation.html";
      } else if (predefinedRole === "professeur") {
        window.location.href = "prof.html";
      } else if (predefinedRole === "recruteur") {
        window.location.href = "page recruteur_Accueil.html";
      } else {
        alert("Rôle inconnu !");
      }
    } else {
      // Échec de la connexion
      alert("Erreur lors de la connexion : Nom d'utilisateur ou mot de passe incorrect.");
    }
  }, 1000); // Simule un délai d'attente de 1 seconde, à remplacer par une vraie requête fetch ou axios
}

// Associer la fonction à un formulaire
document.querySelector("#loginForm").addEventListener("submit", login);



////////////////// page de connexion/////////////////////////////////

/*function login(e) {
  e.preventDefault();

   let username = document.querySelector("#signupUsernameInput").value;
  let password = document.querySelector("#signUpPasswordInput").value;

  let data = {
    username: username, // Ici le username saisi par l'utilisateur
    password: password, // Ici le mot de passe saisi par l'utilisateur
  };

  // Simuler une requête de connexion (remplacer par fetch ou axios selon vos besoins)
  fetch("https://example.com/api/login", { // Remplacez par votre URL d'API
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    if (json.success) {
      alert("Connexion réussie !");
      // Utiliser le rôle prédéfini ici
      if (data.role === "etudiant") {
        window.location.href = "page_etudiant.html";
      } else if (data.role === "professeur") {
        window.location.href = "prof.html";
      } else if (data.role === "recruteur") {
        window.location.href = "page recruteur_Accueil.html";
      } else {
        alert("Rôle inconnu !");
      }
    } else {
      alert("Erreur lors de la connexion : " + json.message);
    }
  })
  .catch((error) => {
    console.error("Erreur :", error);
    alert("Une erreur est survenue lors de la connexion.");
  });
}

// Associer la fonction à un formulaire
document.querySelector("#loginForm").addEventListener("submit", login);*/


  