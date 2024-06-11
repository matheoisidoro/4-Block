function submitForm() {
    const form = document.getElementById('contactForm');
    const destinataire = form.destinataire.value;
    const email = form.email.value;
    const objet = form.objet.value;
    const message = form.message.value;

    if (!destinataire || !email || !objet || !message) {
        alert("Tous les champs doivent être remplis !");
        return;
    }

    console.log("Form Submitted!");
    console.log("Destinataire:", destinataire);
    console.log("Email:", email);
    console.log("Objet:", objet);
    console.log("Message:", message);

    alert("Formulaire soumis avec succès!");

    form.reset();
}

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    const { destinataire, email, objet, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'isidoro.matheo@gmail.com',  // Remplacez par votre email
            pass: 'Pf9l7m8I$'    // Remplacez par votre mot de passe
        }
    });

    const mailOptions = {
        from: email,
        to: destinataire,
        subject: objet,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('E-mail envoyé avec succès!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
