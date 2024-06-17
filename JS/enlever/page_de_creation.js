function signup(e, formEl) {
  e.preventDefault();

  // Récupération des données saisie par l'utilisateur dans le HTML
  // Ici mettre les bons selecteurs HTML (vous n'aurez probablement pas les même que moi)
  let username = document.querySelector("#signupUsernameInput").value;
  let password = document.querySelector("#signUpPasswordInput").value;

  let data = {
    username: username, // Ici le username saisi par l'utilisateur
    password: password, // Ici le mot de passe saisi par l'utilisateur
  };

  // fetch(url) va faire une requete vers l'URL passé en paramètre
  // C'est le chemin vers votre backend
  fetch("http://localhost:5000/api/user/signup", {
    method: "POST", // Type de requête (ici POST car on ENVOIE quelque chose)
    body: JSON.stringify(data), // Contenu de la requete
    headers: {
      // Entête de la requête important, à ne pas oublier
      "Content-Type": "application/json",
    },
  }).then((res) => {
    // Quand on à recu une réponse à notre requête
    res.json().then((json) => {
      // On transforme la réponse en JSON et quand c'est terminé
      console.log(json); // On affiche ce qu'on à récupéré dans la console
      // ... Plus de code ici
    });
  });
}