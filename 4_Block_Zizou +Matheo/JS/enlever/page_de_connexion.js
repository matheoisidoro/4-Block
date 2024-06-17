function login(e) {
  e.preventDefault();

  let username = document.querySelector("#usernameInput").value;
  let password = document.querySelector("#passwordInput").value;

  let data = {
    username: username,
    password: password,
  };
  fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    res.json().then((json) => {
      console.log(json);

      // On stock le jeton sous forme de cookie dans le navigateur
      setCookie("token", json.token, 24);

      // On redirige l'utilisateur sur la page d'accueil
      window.location.href = "index.html";
    });
  });
}