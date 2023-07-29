let coteA = document.getElementById("coteA")
let coteB = document.getElementById("coteB")
let coteC = document.getElementById("coteC")
let angleAlpha = document.getElementById("angleAlpha")
let angleBeta = document.getElementById("angleBeta")
let angleGamma = document.getElementById("angleGamma")
let hauteurA = document.getElementById("hauteurA")
let hauteurB = document.getElementById("hauteurB")
let hauteurC = document.getElementById("hauteurC")
let aire = document.getElementById("aire")
let button = document.getElementById("calcul")




function coteAF() {
        // Calculer le cosinus de l'angle Alpha (A) en utilisant la loi des cosinus
        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)

        // Calculer l'angle Alpha (A) en radians en utilisant la fonction Math.acos()
        let angleAlphaRadians = Math.acos(cosAlpha)

        // Convertir l'angle de radians à degrés en utilisant la fonction Math.degrees()
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI

        // Mettre à jour la valeur de l'angleAlpha dans l'élément HTML correspondant
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value);
        let angleBetaRadians = Math.acos(cosBeta);
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
        angleBeta.value = angleBetaDegrees.toFixed(3);

        let cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
        let angleGammaRadians = Math.acos(cosGamma);
        let angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
        angleGamma.value = angleGammaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180); // Convertir l'angle Gamma en radians avant de calculer le sin
        hauteurB.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);
        hauteurC.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);

        aire.value = (coteA.value * hauteurA.value) / 2
}

coteA.onchange = function () {
    coteAF()
}

coteB.onchange = function () {
    coteAF()
}

coteC.onchange = function () {
    coteAF()
}





function angleBetaFromAlphaGamma() {

    angleBeta.value = 180 - angleAlpha.value - angleGamma.value
}

function angleAlphaFromGammaBeta() {

        angleAlpha.value = 180 - angleBeta.value -angleGamma.value
}

function angleGammaFromBetaAlpha() {

        angleGamma.value = 180 - angleAlpha.value - angleBeta.value
}


button.onclick = function () {
    const alphaValue = parseFloat(angleAlpha.value);
    const betaValue = parseFloat(angleBeta.value);
    const gammaValue = parseFloat(angleGamma.value);

    // Vérifier si deux valeurs sont remplies
    if (!isNaN(alphaValue) && !isNaN(betaValue)) {

        angleGammaFromBetaAlpha();
    } else if (!isNaN(alphaValue) && !isNaN(gammaValue)) {

        angleBetaFromAlphaGamma();
    } else if (!isNaN(betaValue) && !isNaN(gammaValue)) {

        angleAlphaFromGammaBeta();
    } else {
        // Afficher un message d'erreur si deux valeurs ne sont pas remplies
        alert("Veuillez entrer deux valeurs parmis les angles avant de cliquer sur le bouton.");
    }
}
