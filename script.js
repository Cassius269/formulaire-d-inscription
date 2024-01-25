// Déclaration des variables

let inputMotDePasse=document.querySelector("#motDePasse");

let inputConfirmationMotDePasse=document.querySelector("#ConfirmationMotDePasse");

let input
// Evenement de type input pour tester l'égalité des mots de passes

    // Fonction callback de verification des mots de passe
/*
function verifierMemeMotDePasse(){
    // Séléction des élements indicateurs de mots de passes
    let iconeLongueurPasOk=document.querySelector(".iconePasOk");
    let iconeCaracteresSpeciauxPasOk=document.querySelector(".iconeCaracteresSpeciauxPasOk");

    // Vérification de la longueur des mots de passe et de l'égalité des valeurs des mots de passes
        if(inputMotDePasse.value.length>=8 && inputConfirmationMotDePasse.value.length>=8 && inputMotDePasse.value===inputConfirmationMotDePasse.value){
            let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

            iconeLongueurPasOk.setAttribute("src","/images/iconeOK.svg");
            iconeLongueurPasOk.setAttribute("alt","Icone en croix représentant une bonne saisie");
            console.log("Longueur ok");
            
            // Vérification du regex
            if(regex.test(inputMotDePasse.value) || regex.test(inputConfirmationMotDePasse.value)){
                iconeCaracteresSpeciauxPasOk.setAttribute("src","/images/iconeOK.svg")
                console.log("regex ok")
            }
            else{
                iconeCaracteresSpeciauxPasOk.setAttribute("src","/images/iconPasOk.svg")
                console.log("regex pas ok");
            }
        }
        else {
            iconeLongueurPasOk.setAttribute("src","/images/iconPasOk.svg");
            iconeLongueurPasOk.setAttribute("alt","Icone représentant une mauvaise saisie utilisateur");
            console.log("Longueur pas ok");
        }

}
*/

//Correction de bugg

function verifierMemeMotDePasse(){
    // Séléction des élements indicateurs de mots de passes
    let iconeLongueurPasOk=document.querySelector(".iconePasOk");

    // Vérification de la longueur des mots de passe et de l'égalité des valeurs des mots de passe
        if(inputMotDePasse.value.length>=8 && inputConfirmationMotDePasse.value.length>=8 && inputMotDePasse.value===inputConfirmationMotDePasse.value){

            iconeLongueurPasOk.setAttribute("src","/images/iconeOK.svg");
            iconeLongueurPasOk.setAttribute("alt","Icone en croix représentant une bonne saisie");
            console.log("Longueur ok");
            console.log("mots de passe égaux");
        }
        else {
            console.log("Longueur pas ok");
            console.log("mots de passe pas ok");

        }
}

inputMotDePasse.addEventListener("input",verifierMemeMotDePasse);


inputConfirmationMotDePasse.addEventListener("input",verifierMemeMotDePasse);


// Mise en place du gestionnaire d'évenement de type input pour vérifier le regex sur les mots de passe saisis

function verifierRegexMotDePasse(){
    // Sélectionner l'icone indicateur pour les caractères spéciaux
    let iconeCaracteresSpeciauxPasOk=document.querySelector(".iconeCaracteresSpeciauxPasOk");

    // Création d'une variable regex contenant le motif de motif de mot de passe avec au moins  1 chiffre, une lettre et et une Majuscule
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if(regex.test(inputMotDePasse.value) && regex.test(inputConfirmationMotDePasse.value)){
        iconeCaracteresSpeciauxPasOk.setAttribute("src","/images/iconeOK.svg");
        console.log("regex ok");
    }
    else{
        iconeCaracteresSpeciauxPasOk.setAttribute("src","/images/iconPasOk.svg");
        console.log("regex pas ok")
    }
}

inputMotDePasse.addEventListener("input",verifierRegexMotDePasse);
inputConfirmationMotDePasse.addEventListener("input",verifierRegexMotDePasse);


// Vérification de la saisie de l'adresse email

let inputEmail=document.querySelector("#email");

// Mettre gestionnaire d'évenement pour vérifier le mail

    // Fonction callback de vérification de mail

let verifierSaisieEmail=()=>{
    let regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
    if(regexEmail.test(inputEmail.value)){// retourne vrai si le regex match avec l'adresse email saisi
        inputEmail.style.background="green";
        console.log("email ok");
    }
    else{
        inputEmail.style.background="red";
        console.log("email pas ok");
    }
}

inputEmail.addEventListener("input",verifierSaisieEmail);


// Mise en place du menu burger

// selection du menu burger
let iconeMenuBurger=document.querySelector(".headerIcone");
let baliseNavDansHeader=document.querySelector("header nav")

// Mise en place de l'évenement click pour dérouler le menu burger

// Fonction callback de l'évenement click du menu burger
let isOuvert=true;

function ouvrirMenu(){
    if(isOuvert){
        baliseNavDansHeader.style.visibility="visible";
        isOuvert=false;
    }
    else{
        baliseNavDansHeader.style.visibility="hidden";
        isOuvert=true;
    }
}

iconeMenuBurger.addEventListener("click",ouvrirMenu);

