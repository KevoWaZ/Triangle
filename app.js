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


btn3C.onclick = function () {
    LLL()
    LLLEquation()
}

btnAngles.onclick = function () {
    const alphaValue = parseFloat(angleAlpha.value);
    const betaValue = parseFloat(angleBeta.value);
    const gammaValue = parseFloat(angleGamma.value);

    // Vérifier si deux valeurs sont remplies
    if (!isNaN(alphaValue) && !isNaN(betaValue)) {

        angleGammaFromBetaAlpha()
        angleGammaFromBetaAlphaEquation()
    } else if (!isNaN(alphaValue) && !isNaN(gammaValue)) {

        angleBetaFromAlphaGamma()
        angleBetaFromAlphaGammaEquation()
    } else if (!isNaN(betaValue) && !isNaN(gammaValue)) {

        angleAlphaFromGammaBeta()
        angleAlphaFromGammaBetaEquation()
    } 
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

        coteC.value = ((coteA.value * Math.sin(angleGamma.value * Math.PI / 180)) / Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

        let coteBvalue = (coteC.value * Math.sin((angleBeta.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
        coteB.value = coteBvalue.toFixed(3)


        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

        aire.value = ((coteA.value * hauteurA.value) / 2).toFixed(3)
}

btnALA.onclick = function () {
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
        angleGamma.value = angleGammaDegrees.toFixed(3)

        angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)
        angleAlphaDegrees = angleAlpha.value / (180 / Math.PI)

        sinA = Math.sin(angleAlphaDegrees)

        coteA.value = (sinA / sinB * coteB.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3) 

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
        angleBeta.value = angleBetaDegrees.toFixed(3)

        angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)
        angleAlphaDegrees = angleAlpha.value / (180 / Math.PI)

        sinA = Math.sin(angleAlphaDegrees)

        coteA.value = (sinA / sinC * coteC.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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
        angleBeta.value = angleBetaDegrees.toFixed(3)

        angleGamma.value = (180 - angleBeta.value - angleAlpha.value).toFixed(3)
        angleGammaDegrees = angleGamma.value / (180 / Math.PI)

        sinC = Math.sin(angleGammaDegrees)

        coteC.value = (sinC / sinA * coteA.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        angleGamma.value = (180 - angleBeta.value - angleAlpha.value).toFixed(3)
        angleGammaDegrees = angleGamma.value / (180 / Math.PI)

        sinC = Math.sin(angleGammaDegrees)

        coteC.value = (sinC / sinB * coteB.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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
        angleAlpha.value = angleAlphaDegrees.toFixed(3)

        angleBeta.value = (180 - angleGamma.value - angleAlpha.value).toFixed(3)
        angleBetaDegrees = angleBeta.value / (180 / Math.PI)

        sinB = Math.sin(angleBetaDegrees)

        coteB.value = (sinB / sinC * coteC.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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
        angleGamma.value = angleGammaDegrees.toFixed(3)

        angleBeta.value = (180 - angleGamma.value - angleAlpha.value).toFixed(3)
        angleBetaDegrees = angleBeta.value / (180 / Math.PI)

        sinB = Math.sin(angleBetaDegrees)

        coteB.value = (sinB / sinC * coteC.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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
        angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        sinC = Math.sin(angleGammaRadians)
        sinB = Math.sin(angleBetaRadians)

        coteB.value = (sinB / sinC * coteC.value).toFixed(3)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)
        sinA = Math.sin(angleAlphaRadians)

        coteA.value = (sinA / sinC * coteC.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3) 

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Gamma_Beta_B() {
        angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        sinC = Math.sin(angleGammaRadians)
        sinB = Math.sin(angleBetaRadians)
        sinA = Math.sin(angleAlphaRadians)

        coteA.value = (sinA / sinB * coteB.value).toFixed(3)

        coteC.value = (sinC / sinA * coteA.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Alpha_Gamma_A() {
        angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinC = Math.sin(angleGammaRadians)

        coteC.value = (sinC / sinA * coteA.value).toFixed(3)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)
        sinB = Math.sin(angleBetaRadians)

        coteB.value = (sinB / sinA * coteA.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Alpha_Gamma_C() {
        angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinB = Math.sin(angleBetaRadians)
        sinC = Math.sin(angleGammaRadians)

        coteB.value = (sinB / sinC * coteC.value).toFixed(3)

        coteA.value = (sinA / sinC * coteC.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Beta_Alpha_B() {
        angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinB = Math.sin(angleBetaRadians)

        coteA.value = (sinA / sinB * coteB.value).toFixed(3)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)
        sinC = Math.sin(angleGammaRadians)

        coteC.value = (sinC / sinA * coteA.value).toFixed(3)

        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

        hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
        hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
        hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

}

function AAL_Beta_Alpha_A() {
        angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)

        angleBetaRadians = angleBeta.value * (Math.PI / 180)

        angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

        angleGammaRadians = angleGamma.value * (Math.PI / 180)

        sinA = Math.sin(angleAlphaRadians)
        sinB = Math.sin(angleBetaRadians)
        sinC = Math.sin(angleGammaRadians)

        coteC.value = (sinC / sinA * coteA.value).toFixed(3)

        coteB.value = (sinB / sinC * coteC.value).toFixed(3)

        // Formule de Héron pour trouver l'aire
        demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

        aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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


    if(numberOfSidesEntered === 3 && numberOfAnglesEntered === 0) {
        if (!isNaN(sideAValue) && !isNaN(sideBValue) && !isNaN(sideCValue)) {
            LLL()
            LLLEquation()
        }
    }


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