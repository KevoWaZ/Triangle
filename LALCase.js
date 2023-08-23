// TROUVER A PARTIR DU COTE ANGLE COTE CAS LAL Un angle et les deux côtés adjacents


function LAL_A_Gamma_B() {
    // Convertit l'angle en radians
    angleGammaRadians = (angleGamma.value * Math.PI) / 180

    // Utilise la loi des cosinus pour calculer la longueur du côté coteC
    coteC.value = (Math.sqrt(coteA.value ** 2 + coteB.value ** 2 - 2 * coteA.value * coteB.value * Math.cos(angleGammaRadians))).toFixed(3)
    cosGamma = Math.cos(angleGammaRadians)

    cosBeta = (coteA.value ** 2 + coteC.value ** 2 - coteB.value ** 2) / (2 * coteA.value * coteC.value)
    angleBetaRadians = Math.acos(cosBeta)
    angleBetaDegrees = angleBetaRadians * 180 / Math.PI
    angleBeta.value = angleBetaDegrees.toFixed(3)

    angleAlpha.value = (180 - angleBeta.value - angleGamma.value).toFixed(3)

    // Calcule le demi-périmètre pour l'aire du triangle
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    // Calcule l'aire du triangle en utilisant la formule de Héron
    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    // Calcule les hauteurs relatives aux côtés du triangle en utilisant l'aire et les longueurs des côtés
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)
}


function LAL_B_Alpha_C() {
    // Convertit l'angle en radians
    angleAlphaRadians = (angleAlpha.value * Math.PI) / 180

    // Utilise la loi des cosinus pour calculer la longueur du côté coteA
    coteA.value = (Math.sqrt(coteB.value ** 2 + coteC.value ** 2 - 2 * coteB.value * coteC.value * Math.cos(angleAlphaRadians))).toFixed(3)
    cosAlpha = Math.cos(angleAlphaRadians)

    cosBeta = (coteA.value ** 2 + coteC.value ** 2 - coteB.value ** 2) / (2 * coteA.value * coteC.value)
    angleBetaRadians = Math.acos(cosBeta)
    angleBetaDegrees = angleBetaRadians * 180 / Math.PI
    angleBeta.value = angleBetaDegrees.toFixed(3)

    // Calcule l'angle Gamma en fonction des autres angles
    angleGamma.value = (180 - angleBeta.value - angleAlpha.value).toFixed(3)

    // Calcule le demi-périmètre pour l'aire du triangle
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    // Calcule l'aire du triangle en utilisant la formule de Héron
    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    // Calcule les hauteurs relatives aux côtés du triangle en utilisant l'aire et les longueurs des côtés
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)
    
    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)
}


function LAL_C_Beta_A() {
    // Convertit l'angle en radians
    angleBetaRadians = (angleBeta.value * Math.PI) / 180

    // Utilise la loi des cosinus pour calculer la longueur du côté coteB
    coteB.value = (Math.sqrt(coteC.value ** 2 + coteA.value ** 2 - 2 * coteC.value * coteA.value * Math.cos(angleBetaRadians))).toFixed(3)

    // Calcule le cosinus de l'angle Gamma en utilisant la loi des cosinus
    cosGamma = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value)
    angleGammaRadians = Math.acos(cosGamma);
    angleGammaDegrees = (angleGammaRadians * 180) / Math.PI

    // Met à jour la valeur de l'angle Gamma
    angleGamma.value = angleGammaDegrees.toFixed(3)

    // Calcule l'angle Alpha en fonction des autres angles
    angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)

    // Calcule le demi-périmètre pour l'aire du triangle
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    // Calcule l'aire du triangle en utilisant la formule de Héron
    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    // Calcule les hauteurs relatives aux côtés du triangle en utilisant l'aire et les longueurs des côtés
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)
}