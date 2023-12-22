function ajoutercommentaire () {
    var commentaire = document.getElementById("comment-list").value;

    if (commentaire.trim() !== "") {
        var paragraphe = document.createElement("p");
        paragraphe.textContent = commentaire;

        document.getElementById("comment-list").appendChild(paragraphe);

        document.getElementById("comment").value = "";
    
    }

}


console.log ('hello-world')

//j'ai trouver ca sur discord essayons (condition de remplissage des champs)
if (first-Name.value === ""|| last-Name.value === ""||Message.value === "") {
    showError();
    e.defaultPrevented();
}



let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
    let myInput = doucment.getElementById('first-name');

    if (myInput.value.trim() == "") {
        let 

    }
    
    


});



function verif_champ(first_name) {
    if (document.getElementById(first_name) == "")
    {
        alert ('Erreur, le champ est vide');
        return false;
    }
    else {
        //j'envoie
    }
    return true;
}