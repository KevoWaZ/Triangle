// // // TROUVER LA VALEUR D'UN ANGLE A PARTIR DE DEUX ANGLES

function angleBetaFromAlphaGamma() {

    angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)
}

function angleAlphaFromGammaBeta() {

    angleAlpha.value = (180 - angleBeta.value - angleGamma.value).toFixed(3)
}

function angleGammaFromBetaAlpha() {

    angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)
}