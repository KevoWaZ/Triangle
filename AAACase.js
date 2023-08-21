// // // TROUVER LA VALEUR D'UN ANGLE A PARTIR DE DEUX ANGLES

function angleBetaFromAlphaGamma() {
    // Calcule l'angle Beta en utilisant la somme des angles du triangle (180 degrés)
    angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)
}

function angleAlphaFromGammaBeta() {
    // Calcule l'angle Alpha en utilisant la somme des angles du triangle (180 degrés)
    angleAlpha.value = (180 - angleBeta.value - angleGamma.value).toFixed(3)
}

function angleGammaFromBetaAlpha() {
    // Calcule l'angle Gamma en utilisant la somme des angles du triangle (180 degrés)
    angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)
}