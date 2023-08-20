// TROUVER A PARTIR DU COTE ANGLE COTE CAS LAL Un angle et les deux côtés adjacents


function LAL_A_Gamma_B() {
    angleGammaRadians = (angleGamma.value * Math.PI) / 180
    coteC.value = (Math.sqrt(coteA.value ** 2 + coteB.value ** 2 - 2 * coteA.value * coteB.value * Math.cos(angleGammaRadians))).toFixed(3)
    cosGamma = Math.cos(angleGammaRadians)

    sinA = (coteA.value * Math.sin(angleGammaRadians)) / coteC.value
    angleAlphaRadians = Math.asin(sinA)
    angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
    angleAlpha.value = angleAlphaDegrees.toFixed(3)

    angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)


    // Formule de Héron pour trouver l'aire
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)
    ///////////

    // Calcul de la hauteur 
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)
    ///////////
}


function LAL_B_Alpha_C() {

    // Calcul côté 
    angleAlphaRadians = (angleAlpha.value * Math.PI) / 180
    coteA.value = (Math.sqrt(coteB.value ** 2 + coteC.value ** 2 - 2 * coteB.value * coteC.value * Math.cos(angleAlphaRadians))).toFixed(3)
    cosAlpha = Math.cos(angleAlphaRadians)

    sinBeta = (cosAlpha / coteA.value) * coteB.value
    angleBetaRadians = Math.asin(sinBeta)
    angleBetaDegrees = (angleBetaRadians * 180) / Math.PI
    angleBeta.value = angleBetaDegrees.toFixed(3)

    angleGamma.value = 180 - angleBeta.value - angleAlpha.value


    // Formule de Héron pour trouver l'aire
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)
    ///////////

    // Calcul de la hauteur 
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)
    ///////////
}


function LAL_C_Beta_A() {
    angleBetaRadians = (angleBeta.value * Math.PI) / 180
    coteB.value = (Math.sqrt(coteC.value ** 2 + coteA.value ** 2 - 2 * coteC.value * coteA.value * Math.cos(angleBetaRadians))).toFixed(3)

    cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
    angleGammaRadians = Math.acos(cosGamma);
    angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
    angleGamma.value = angleGammaDegrees.toFixed(3);

    angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)


    // Formule de Héron pour trouver l'aire
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)
    ///////////

    // Calcul de la hauteur 
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)
    ///////////
}