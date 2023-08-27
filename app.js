let coteA = document.getElementById("coteA")
let coteB = document.getElementById("coteB")
let coteC = document.getElementById("coteC")
let angleAlpha = document.getElementById("angleAlpha")
let angleBeta = document.getElementById("angleBeta")
let angleGamma = document.getElementById("angleGamma")
let cosiA = document.getElementById("cosiA")
let cosiB = document.getElementById("cosiB")
let cosiC = document.getElementById("cosiC")
let sinA = document.getElementById("sinA")
let sinB = document.getElementById("sinB")
let sinC = document.getElementById("sinC")
let tanA = document.getElementById("tanA")
let tanB = document.getElementById("tanB")
let tanC = document.getElementById("tanC")
let medianeA = document.getElementById("medA")
let medianeB = document.getElementById("medB")
let medianeC = document.getElementById("medC")
let bissectriceA = document.getElementById("bisA")
let bissectriceB = document.getElementById("bisB")
let bissectriceC = document.getElementById("bisC")
let hauteurA = document.getElementById("hauteurA")
let hauteurB = document.getElementById("hauteurB")
let hauteurC = document.getElementById("hauteurC")
let aire = document.getElementById("aire")
let demiPeri = document.getElementById("demiP")
let perimetre = document.getElementById("perimetre")
let btnAngles = document.getElementById("calcul2Angles")
let btn3C = document.getElementById("calcul3C")
let btnLAL = document.getElementById("calculLAL")
let btnALA = document.getElementById("calculALA")
let btnLLA = document.getElementById("calculLLA")
let btnAAL = document.getElementById("calculAAL")
let btnChercher = document.getElementById("chercher")
let btnReset = document.getElementById("reset")

let Tau = Math.PI * 2


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
        cosiA.value = ""
        cosiB.value = ""
        cosiC.value = ""
        sinA.value = ""
        sinB.value = ""
        sinC.value = ""
        tanA.value = ""
        tanB.value = ""
        tanC.value = ""
        medianeA.value = ""
        medianeB.value = ""
        medianeC.value = ""
        bissectriceA.value = ""
        bissectriceB.value = ""
        bissectriceC.value = ""
        demiPeri.value = ""
        perimetre.value = ""
        aire.value = ""
        hauteurA.value = ""
        hauteurB.value = ""
        hauteurC.value = ""

        let ajout = document.querySelector('.equation');
        ajout.innerHTML = "";
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