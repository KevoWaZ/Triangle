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
let btn3C = document.getElementById("calcul3C")
let btnSAS = document.getElementById("calculSAS")
let btnASA = document.getElementById("calculASA")
let btnLLA = document.getElementById("calculLLA")
let btnChercher = document.getElementById("chercher")
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

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180).toFixed(3); // Convertir l'angle Gamma en radians avant de calculer le sin
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180).toFixed(3);  // ERREUR JE DOIS MODIFIER
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180).toFixed(3);

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}

btn3C.onclick = function () {
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


// TROUVER A PARTIR DU COTE ANGLE COTE CAS SAS Un angle et les deux côtés adjacents


function SAS_A_Gamma_B() {
        let angleGammaRadiansSAS = (angleGamma.value * Math.PI) / 180

        coteC.value = (Math.sqrt(coteA.value ** 2 + coteB.value ** 2 - 2 * coteA.value * coteB.value * Math.cos(angleGammaRadiansSAS))).toFixed(3)


        let cosAlpha = (coteB.value ** 2 + coteC.value ** 2 - coteA.value ** 2) / (2 * coteB.value * coteC.value)
        let angleAlphaRadians = Math.acos(cosAlpha)
        let angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        let cosBeta = (coteC.value ** 2 + coteA.value ** 2 - coteB.value ** 2) / (2 * coteC.value * coteA.value);
        let angleBetaRadians = Math.acos(cosBeta);
        let angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
        angleBeta.value = angleBetaDegrees.toFixed(3);

        hauteurA.value = coteB.value * Math.sin(angleGammaRadiansSAS).toFixed(3);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180).toFixed(3);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180).toFixed(3);

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)

}


function SAS_B_Alpha_C() {
        let angleAlphaRadiansSAS = (angleAlpha.value * Math.PI) / 180

        coteA.value = (Math.sqrt(coteB.value ** 2 + coteC.value ** 2 - 2 * coteB.value * coteC.value * Math.cos(angleAlphaRadiansSAS))).toFixed(3)


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

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180).toFixed(3);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180).toFixed(3);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180).toFixed(3);

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}


function SAS_C_Beta_A() {
        let angleBetaRadiansSAS = (angleBeta.value * Math.PI) / 180

        coteB.value = (Math.sqrt(coteC.value ** 2 + coteA.value ** 2 - 2 * coteC.value * coteA.value * Math.cos(angleBetaRadiansSAS))).toFixed(3)


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

        hauteurA.value = coteB.value * Math.sin(angleGammaDegrees * Math.PI / 180).toFixed(3);
        hauteurB.value = coteB.value * Math.sin(angleBetaDegrees * Math.PI / 180).toFixed(3);
        hauteurC.value = coteB.value * Math.sin(angleAlphaDegrees * Math.PI / 180).toFixed(3);

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}


btnSAS.onclick = function SAS_Search() {
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


// // TROUVER A PARTIR de Deux angles et le côté commun CAS ASA

function ASA_Beta_C_Alpha() {
        
        angleGamma.value = 180 - angleAlpha.value - angleBeta.value

        let coteAvalue = (coteC.value * Math.sin((angleAlpha.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
        coteA.value = coteAvalue.toFixed(3)

        let coteBvalue = (coteC.value * Math.sin((angleBeta.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
        coteB.value = coteBvalue.toFixed(3)

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}

function ASA_Alpha_B_Gamma() {
        
        angleBeta.value = 180 - angleAlpha.value - angleGamma.value

        let coteCvalue = (coteB.value * Math.sin((angleGamma.value * Math.PI) / 180)) / Math.sin((angleBeta.value * Math.PI) / 180)
        coteC.value = coteCvalue.toFixed(3)

        let coteAvalue = (coteC.value * Math.sin((angleAlpha.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
        coteA.value = coteAvalue.toFixed(3)


        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}

function ASA_Gamma_A_Beta() {
        
        angleAlpha.value = 180 - angleBeta.value - angleGamma.value

        coteC.value = (coteA.value * Math.sin(angleGamma.value * Math.PI / 180)) / Math.sin(angleAlpha.value * Math.PI / 180);

        let coteBvalue = (coteC.value * Math.sin((angleBeta.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
        coteB.value = coteBvalue.toFixed(3)


        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}

btnASA.onclick = function ASA_Search() {
        const sideAValue = parseFloat(coteA.value);
        const sideBValue = parseFloat(coteB.value);
        const sideCValue = parseFloat(coteC.value);
        const angleAlphaValue = parseFloat(angleAlpha.value);
        const angleBetaValue = parseFloat(angleBeta.value);
        const angleGammaValue = parseFloat(angleGamma.value);

        const numberOfSidesEntered = [sideAValue, sideBValue, sideCValue].filter((value) => !isNaN(value)).length;
        const numberOfAnglesEntered = [angleAlphaValue, angleBetaValue, angleGammaValue].filter((value) => !isNaN(value)).length;

        if(numberOfSidesEntered === 1 && numberOfAnglesEntered === 2) {
            if (!isNaN(angleAlphaValue) && !isNaN(angleBetaValue) && !isNaN(sideCValue)) {
                ASA_Beta_C_Alpha()
            } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideBValue)) {
                ASA_Alpha_B_Gamma()
            } else if (!isNaN(angleGammaValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
                ASA_Gamma_A_Beta()
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


function LLA_B_C_Beta() {

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        sinB = Math.sin(angleBetaRadians)

        sinC = sinB / coteB.value * coteC.value
        angleGammaRadians = Math.asin(sinC)
        angleGammaDegrees = angleGammaRadians * (180 / Math.PI)
        angleGamma.value = angleGammaDegrees

        angleAlpha.value = 180 - angleGamma.value - angleBeta.value
        angleAlphaDegrees = angleAlpha.value / (180 / Math.PI)

        sinA = Math.sin(angleAlphaDegrees)

        coteA.value = sinA / sinB * coteB.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)
}

function LLA_A_B_Alpha() {

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)

        sinB = sinA / coteA.value * coteB.value
        angleBetaRadians = Math.asin(sinB)
        angleBetaDegrees = angleBetaRadians * (180 / Math.PI)
        angleBeta.value = angleBetaDegrees

        angleGamma.value = 180 - angleBeta.value - angleAlpha.value
        angleGammaDegrees = angleGamma.value / (180 / Math.PI)

        sinC = Math.sin(angleGammaDegrees)

        coteC.value = sinC / sinA * coteA.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)
}

function LLA_C_A_Gamma() {

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        sinC = Math.sin(angleGammaRadians)

        sinA = sinC / coteC.value * coteA.value
        angleAlphaRadians = Math.asin(sinA)
        angleAlphaDegrees = angleAlphaRadians * (180 / Math.PI)
        angleAlpha.value = angleAlphaDegrees

        angleBeta.value = 180 - angleGamma.value - angleAlpha.value
        angleBetaDegrees = angleBeta.value / (180 / Math.PI)

        sinB = Math.sin(angleBetaDegrees)

        coteB.value = sinB / sinC * coteC.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteA.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)
}


btnChercher.onclick = function() {
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
            SAS_A_Gamma_B()
        } else if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleAlphaValue)) {
            SAS_B_Alpha_C()
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
            SAS_C_Beta_A()
        }
    }

    if (numberOfSidesEntered === 1 && numberOfAnglesEntered === 2) {
        if (!isNaN(angleAlphaValue) && !isNaN(angleBetaValue) && !isNaN(sideCValue)) {
            ASA_Beta_C_Alpha()
        } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideBValue)) {
            ASA_Alpha_B_Gamma()
        } else if (!isNaN(angleGammaValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
            ASA_Gamma_A_Beta()
        } 
    }

    if (numberOfSidesEntered === 2 && numberOfAnglesEntered === 1) {
        if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleBetaValue)) {
            LLA_B_C_Beta()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleAlphaValue)) {
            LLA_A_B_Alpha()
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleGammaValue)) {
            LLA_C_A_Gamma()
        }
    }
}

btnLLA.onclick = function () {
    const sideAValue = parseFloat(coteA.value);
    const sideBValue = parseFloat(coteB.value);
    const sideCValue = parseFloat(coteC.value);
    const angleAlphaValue = parseFloat(angleAlpha.value);
    const angleBetaValue = parseFloat(angleBeta.value);
    const angleGammaValue = parseFloat(angleGamma.value);

    const numberOfSidesEntered = [sideAValue, sideBValue, sideCValue].filter((value) => !isNaN(value)).length;
    const numberOfAnglesEntered = [angleAlphaValue, angleBetaValue, angleGammaValue].filter((value) => !isNaN(value)).length;

    if (numberOfSidesEntered === 2 && numberOfAnglesEntered === 1) {
        if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleBetaValue)) {
            LLA_B_C_Beta()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleAlphaValue)) {
            LLA_A_B_Alpha()
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleGammaValue)) {
            LLA_C_A_Gamma()
        }
    }
}