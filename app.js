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
let btnAngles = document.getElementById("calcul2Angles")
let btnSAS = document.getElementById("calculSAS")
let btnSSA = document.getElementById("calculSSA")
let btnReset = document.getElementById("reset")


// TROUVER TOUTES LES VALEURS D'UN TRIANGLE A PARTIR DES COTES CAS SSS

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
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);  // ERREUR JE DOIS MODIFIER
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);

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



// // // TROUVER LA VALEUR D'UN ANGLE A PARTIR DE DEUX ANGLES

function angleBetaFromAlphaGamma() {

        angleBeta.value = 180 - angleAlpha.value - angleGamma.value
}

function angleAlphaFromGammaBeta() {

        angleAlpha.value = 180 - angleBeta.value - angleGamma.value
}

function angleGammaFromBetaAlpha() {

        angleGamma.value = 180 - angleAlpha.value - angleBeta.value
}


btnAngles.onclick = function () {
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


// // TROUVER A PARTIR DU COTE ANGLE COTE CAS SAS


function SAS_A_Gamma_B() {
        let angleGammaRadiansSAS = (angleGamma.value * Math.PI) / 180

        coteC.value = (Math.sqrt(coteA.value ** 2 + coteB.value ** 2 - 2 * coteA.value * coteB.value * Math.cos(angleGammaRadiansSAS))).toFixed(2)


        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)
        let angleAlphaRadians = Math.acos(cosAlpha)
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value);
        let angleBetaRadians = Math.acos(cosBeta);
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
        angleBeta.value = angleBetaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaRadiansSAS);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);

        aire.value = (coteA.value * hauteurA.value) / 2

}


function SAS_B_Alpha_C() {
        let angleAlphaRadiansSAS = (angleAlpha.value * Math.PI) / 180

        coteA.value = (Math.sqrt(coteB.value ** 2 + coteC.value ** 2 - 2 * coteB.value * coteC.value * Math.cos(angleAlphaRadiansSAS))).toFixed(2)


        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)
        let angleAlphaRadians = Math.acos(cosAlpha)
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value);
        let angleBetaRadians = Math.acos(cosBeta);
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
        angleBeta.value = angleBetaDegrees.toFixed(3);

        let cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
        let angleGammaRadians = Math.acos(cosGamma);
        let angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
        angleGamma.value = angleGammaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);

        aire.value = (coteA.value * hauteurA.value) / 2
}


function SAS_C_Beta_A() {
        let angleBetaRadiansSAS = (angleBeta.value * Math.PI) / 180

        coteB.value = (Math.sqrt(coteC.value ** 2 + coteA.value ** 2 - 2 * coteC.value * coteA.value * Math.cos(angleBetaRadiansSAS))).toFixed(2)


        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)
        let angleAlphaRadians = Math.acos(cosAlpha)
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value);
        let angleBetaRadians = Math.acos(cosBeta);
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
        angleBeta.value = angleBetaDegrees.toFixed(3);

        let cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
        let angleGammaRadians = Math.acos(cosGamma);
        let angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
        angleGamma.value = angleGammaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);

        aire.value = (coteA.value * hauteurA.value) / 2
}


btnSAS.onclick = function () {
    const sideAValue = parseFloat(coteA.value);
    const sideBValue = parseFloat(coteB.value);
    const sideCValue = parseFloat(coteC.value);
    const angleAlphaValue = parseFloat(angleAlpha.value);
    const angleBetaValue = parseFloat(angleBeta.value);
    const angleGammaValue = parseFloat(angleGamma.value);

    const numberOfSidesEntered = [sideAValue, sideBValue, sideCValue].filter((value) => !isNaN(value)).length;
    const numberOfAnglesEntered = [angleAlphaValue, angleBetaValue, angleGammaValue].filter((value) => !isNaN(value)).length;

    if (numberOfSidesEntered === 2 && numberOfAnglesEntered === 1) {
        if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleGammaValue)) {
            SAS_A_Gamma_B();
        } else if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleAlphaValue)) {
            SAS_B_Alpha_C();
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
            SAS_C_Beta_A();
        } else {
            alert("Les valeurs entrées ne sont pas valides pour résoudre un triangle SAS.");
        }
    } else {
        alert("Veuillez entrer exactement deux côtés et un angle pour résoudre le triangle SAS.");
    }
}



// TROUVER A PARTIR DE COTE COTE ANGLE

function SSA_A_B_Gamma() {
        let angleGammaRadiansSSA = (angleGamma.value * Math.PI) / 180

        coteC.value = (Math.sqrt(coteA.value ** 2 + coteB.value ** 2 - 2 * coteA.value * coteB.value * Math.cos(angleGammaRadiansSSA))).toFixed(3)

        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)
        let angleAlphaRadians = Math.acos(cosAlpha)
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value);
        let angleBetaRadians = Math.acos(cosBeta);
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
        angleBeta.value = angleBetaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaRadiansSSA);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);

        aire.value = (coteA.value * hauteurA.value) / 2
}

function SSA_A_C_Beta() {
        let angleBetaRadiansSSA = (angleBeta.value * Math.PI) / 180

        coteB.value = (Math.sqrt(coteA.value ** 2 + coteC.value ** 2 - 2 * coteA.value * coteC.value * Math.cos(angleBetaRadiansSSA))).toFixed(3)

        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)
        let angleAlphaRadians = Math.acos(cosAlpha)
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
        let angleGammaRadians = Math.acos(cosGamma);
        let angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
        angleGamma.value = angleGammaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180);
        hauteurB.value = coteB.value * Math.sin(angleBetaRadiansSSA);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180);

        aire.value = (coteA.value * hauteurA.value) / 2
}

function SSA_B_C_Alpha() {
        let angleAlphaRadiansSSA = (angleAlpha.value * Math.PI) / 180

        coteA.value = (Math.sqrt(coteB.value ** 2 + coteC.value ** 2 - 2 * coteB.value * coteC.value * Math.cos(angleAlphaRadiansSSA))).toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value)
        let angleBetaRadians = Math.acos(cosBeta)
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI
        angleBeta.value = angleBetaDegrees.toFixed(3)

        let cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
        let angleGammaRadians = Math.acos(cosGamma);
        let angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
        angleGamma.value = angleGammaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180);
        hauteurC.value = coteB.value * Math.sin(angleAlphaRadiansSSA);

        aire.value = (coteA.value * hauteurA.value) / 2
}

btnSSA.onclick = function () {
    const sideAValue = parseFloat(coteA.value);
    const sideBValue = parseFloat(coteB.value);
    const sideCValue = parseFloat(coteC.value);
    const angleAlphaValue = parseFloat(angleAlpha.value);
    const angleBetaValue = parseFloat(angleBeta.value);
    const angleGammaValue = parseFloat(angleGamma.value);

    const numberOfSidesEntered = [sideAValue, sideBValue, sideCValue].filter((value) => !isNaN(value)).length;
    const numberOfAnglesEntered = [angleAlphaValue, angleBetaValue, angleGammaValue].filter((value) => !isNaN(value)).length;

    if(numberOfSidesEntered === 2 && numberOfAnglesEntered === 1) {
        if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleAlphaValue)) {
            SSA_B_C_Alpha()
        } else if (!isNaN(sideAValue) && !isNaN(sideCValue) && !isNaN(angleBetaValue)) {
            SSA_A_C_Beta()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleGammaValue)) {
            SSA_A_B_Gamma()
        }
    }
}


btnReset.onclick = function () {
        coteA.value = ""
        coteB.value = ""
        coteC.value = ""
        angleAlpha.value = ""
        angleBeta.value = ""
        angleGamma.value = ""
        hauteurA.value = ""
        hauteurB.value = ""
        hauteurC.value = ""
        aire.value = ""
}