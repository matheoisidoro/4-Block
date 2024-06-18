function sendMail() {
    var objet = document.getElementById('objet').value
    var mailtext = document.getElementById('message').value
    window.location.href = 'mailto:zizouosmane3@gmail.com?subject=' + objet + '&body=' + mailtext;
};


