function validerFormulaire() {
    // Récupère les valeurs des champs
    var prenom = document.getElementById('first-name').value;
    var nom = document.getElementById('last-name').value;

    // Vérifie que les champs ne sont pas vides
    if (prenom === "" || nom === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false; // Empêche l'envoi du formulaire si des champs sont vides
    } else {
        alert("Formulaire valide !");

        // Ajoute ici le code pour envoyer le formulaire ou effectuer d'autres actions
    }
}
