// serveur.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser le JSON des requêtes
app.use(bodyParser.json());

// Utilisateurs prédéfinis
const users = [
    { username: 'matheo', password: 'matheo', role: 'etudiant' },
    { username: 'prof', password: 'prof', role: 'professeur' },
    { username: 'recruteur', password: 'recruteur', role: 'recruteur' }
];

// Endpoint pour l'authentification
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Recherche de l'utilisateur dans la liste des utilisateurs
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Connexion réussie
        res.json({ success: true, role: user.role });
    } else {
        // Échec de la connexion
        res.status(401).json({ success: false, message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
