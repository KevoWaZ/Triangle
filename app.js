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
let btnLAL = document.getElementById("calculLAL")
let btnALA = document.getElementById("calculALA")
let btnLLA = document.getElementById("calculLLA")
let btnAAL = document.getElementById("calculAAL")
let btnChercher = document.getElementById("chercher")
let btnReset = document.getElementById("reset")


// TROUVER TOUTES LES VALEURS D'UN TRIANGLE A PARTIR DES COTES CAS SSS

function cote3() {
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
    cote3()
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


function LAL_A_Gamma_B() {
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


function LAL_B_Alpha_C() {
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


function LAL_C_Beta_A() {
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


btnLAL.onclick = function LAL_Search() {
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
            LAL_A_Gamma_B();
        } else if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleAlphaValue)) {
            LAL_B_Alpha_C();
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
            LAL_C_Beta_A();
        } else {
            alert("Les valeurs entrées ne sont pas valides pour résoudre un triangle SAS.");
        }
    } else {
        alert("Veuillez entrer exactement deux côtés et un angle pour résoudre le triangle SAS.");
    }
}


// // TROUVER A PARTIR de Deux angles et le côté commun CAS ASA

function ALA_Beta_C_Alpha() {
        
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

function ALA_Alpha_B_Gamma() {
        
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

function ALA_Gamma_A_Beta() {
        
        angleAlpha.value = 180 - angleBeta.value - angleGamma.value

        coteC.value = (coteA.value * Math.sin(angleGamma.value * Math.PI / 180)) / Math.sin(angleAlpha.value * Math.PI / 180);

        let coteBvalue = (coteC.value * Math.sin((angleBeta.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
        coteB.value = coteBvalue.toFixed(3)


        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}

btnALA.onclick = function ALA_Search() {
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
                ALA_Beta_C_Alpha()
            } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideBValue)) {
                ALA_Alpha_B_Gamma()
            } else if (!isNaN(angleGammaValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
                ALA_Gamma_A_Beta()
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

function LLA_B_C_Gamma() {

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        sinC = Math.sin(angleGammaRadians)

        sinB = sinC / coteC.value * coteB.value
        angleBetaRadians = Math.asin(sinB)
        angleBetaDegrees = angleBetaRadians * (180 / Math.PI)
        angleBeta.value = angleBetaDegrees

        angleAlpha.value = 180 - angleGamma.value - angleBeta.value
        angleAlphaDegrees = angleAlpha.value / (180 / Math.PI)

        sinA = Math.sin(angleAlphaDegrees)

        coteA.value = sinA / sinC * coteC.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteA.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
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

function LLA_A_B_Beta() {

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        sinB = Math.sin(angleBetaRadians)

        sinA = sinB / coteB.value * coteA.value
        angleAlphaRadians = Math.asin(sinA)
        angleAlphaDegrees = angleAlphaRadians * (180 / Math.PI)
        angleAlpha.value = angleAlphaDegrees

        angleGamma.value = 180 - angleBeta.value - angleAlpha.value
        angleGammaDegrees = angleGamma.value / (180 / Math.PI)

        sinC = Math.sin(angleGammaDegrees)

        coteC.value = sinC / sinB * coteB.value

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

function LLA_C_A_Alpha() {

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)

        sinC = sinA / coteA.value * coteC.value
        angleGammaRadians = Math.asin(sinC)
        angleGammaDegrees = angleGammaRadians * (180 / Math.PI)
        angleGamma.value = angleGammaDegrees

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
        } else if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleGammaValue)) {
            LLA_B_C_Gamma()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleAlphaValue)) {
            LLA_A_B_Alpha()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleBetaValue)) {
            LLA_A_B_Beta()
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleGammaValue)) {
            LLA_C_A_Gamma()
        }  else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleAlphaValue)) {
            LLA_C_A_Alpha()
        }
    }
}


function AAL_Gamma_Beta_C() {
        angleAlpha.value = 180 - angleGamma.value - angleBeta.value

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        sinC = Math.sin(angleGammaRadians)
        sinB = Math.sin(angleBetaRadians)

        coteB.value = sinB / sinC * coteC.value

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)
        sinA = Math.sin(angleAlphaRadians)

        coteA.value = sinA / sinC * coteC.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Gamma_Beta_B() {
        angleAlpha.value = 180 - angleGamma.value - angleBeta.value

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        sinC = Math.sin(angleGammaRadians)
        sinB = Math.sin(angleBetaRadians)
        sinA = Math.sin(angleAlphaRadians)

        coteA.value = sinA / sinB * coteB.value

        coteC.value = sinC / sinA * coteA.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Alpha_Gamma_A() {
        angleBeta.value = 180 - angleAlpha.value - angleGamma.value

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinC = Math.sin(angleGammaRadians)

        coteC.value = sinC / sinA * coteA.value

        angleBetaRadians = angleBeta.value * (Math.PI / 180)
        sinB = Math.sin(angleBetaRadians)

        coteB.value = sinB / sinA * coteA.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Alpha_Gamma_C() {
        angleBeta.value = 180 - angleAlpha.value - angleGamma.value

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinB = Math.sin(angleBetaRadians)
        sinC = Math.sin(angleGammaRadians)

        coteB.value = sinB / sinC * coteC.value

        coteA.value = sinA / sinC * coteC.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Beta_Alpha_B() {
        angleGamma.value = 180 - angleAlpha.value - angleBeta.value

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinB = Math.sin(angleBetaRadians)

        coteA.value = sinA / sinB * coteB.value

        angleGammaRadians = angleGamma.value * (Math.PI / 180)
        sinC = Math.sin(angleGammaRadians)

        coteC.value = sinC / sinA * coteA.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Beta_Alpha_A() {
        angleGamma.value = 180 - angleAlpha.value - angleBeta.value

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinB = Math.sin(angleBetaRadians)
        sinC = Math.sin(angleGammaRadians)

        coteC.value = sinC / sinA * coteA.value

        coteB.value = sinB / sinC * coteC.value

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value)) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

btnAAL.onclick = function () {
    const sideAValue = parseFloat(coteA.value);
    const sideBValue = parseFloat(coteB.value);
    const sideCValue = parseFloat(coteC.value);
    const angleAlphaValue = parseFloat(angleAlpha.value);
    const angleBetaValue = parseFloat(angleBeta.value);
    const angleGammaValue = parseFloat(angleGamma.value);

    const numberOfSidesEntered = [sideAValue, sideBValue, sideCValue].filter((value) => !isNaN(value)).length;
    const numberOfAnglesEntered = [angleAlphaValue, angleBetaValue, angleGammaValue].filter((value) => !isNaN(value)).length;

    if(numberOfSidesEntered === 1 && numberOfAnglesEntered === 2) {
        if (!isNaN(angleGammaValue) && !isNaN(angleBetaValue) && !isNaN(sideCValue)) {
            AAL_Gamma_Beta_C()
        } else if (!isNaN(angleGammaValue) && !isNaN(angleBetaValue) && !isNaN(sideBValue)) {
            AAL_Gamma_Beta_B()
        } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideAValue)) {
            AAL_Alpha_Gamma_A()
        } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideCValue)) {
            AAL_Alpha_Gamma_C()
        } else if (!isNaN(angleBetaValue) && !isNaN(angleAlphaValue) && !isNaN(sideBValue)) {
            AAL_Beta_Alpha_B()
        } else if (!isNaN(angleBetaValue) && !isNaN(angleAlphaValue) && !isNaN(sideAValue)) {
            AAL_Beta_Alpha_A()
        }
    }
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
            LAL_A_Gamma_B()
        } else if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleAlphaValue)) {
            LAL_B_Alpha_C()
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
            LAL_C_Beta_A()
        }
    }

    if (numberOfSidesEntered === 1 && numberOfAnglesEntered === 2) {
        if (!isNaN(angleAlphaValue) && !isNaN(angleBetaValue) && !isNaN(sideCValue)) {
            ALA_Beta_C_Alpha()
        } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideBValue)) {
            ALA_Alpha_B_Gamma()
        } else if (!isNaN(angleGammaValue) && !isNaN(sideAValue) && !isNaN(angleBetaValue)) {
            ALA_Gamma_A_Beta()
        } 
    }

    if (numberOfSidesEntered === 2 && numberOfAnglesEntered === 1) {
        if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleBetaValue)) {
            LLA_B_C_Beta()
        } else if (!isNaN(sideBValue) && !isNaN(sideCValue) && !isNaN(angleGammaValue)) {
            LLA_B_C_Gamma()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleAlphaValue)) {
            LLA_A_B_Alpha()
        } else if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(angleBetaValue)) {
            LLA_A_B_Beta()
        } else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleGammaValue)) {
            LLA_C_A_Gamma()
        }  else if (!isNaN(sideCValue) && !isNaN(sideAValue) && !isNaN(angleAlphaValue)) {
            LLA_C_A_Alpha()
        }
    }

    if(numberOfSidesEntered === 1 && numberOfAnglesEntered === 2) {
        if (!isNaN(angleGammaValue) && !isNaN(angleBetaValue) && !isNaN(sideCValue)) {
            AAL_Gamma_Beta_C()
        } else if (!isNaN(angleGammaValue) && !isNaN(angleBetaValue) && !isNaN(sideBValue)) {
            AAL_Gamma_Beta_B()
        } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideAValue)) {
            AAL_Alpha_Gamma_A()
        } else if (!isNaN(angleAlphaValue) && !isNaN(angleGammaValue) && !isNaN(sideCValue)) {
            AAL_Alpha_Gamma_C()
        } else if (!isNaN(angleBetaValue) && !isNaN(angleAlphaValue) && !isNaN(sideBValue)) {
            AAL_Beta_Alpha_B()
        } else if (!isNaN(angleBetaValue) && !isNaN(angleAlphaValue) && !isNaN(sideAValue)) {
            AAL_Beta_Alpha_A()
        }
    }
}