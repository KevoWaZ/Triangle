// TROUVER TOUTES LES VALEURS D'UN TRIANGLE A PARTIR DES COTES CAS LLL

function LLL() {

    // Calcul des angles
    cosA = ((-Math.pow(coteA.value, 2)) + coteB.value ** 2 + coteC.value ** 2) / (2 * coteB.value * coteC.value)
    angleAlphaRadians = Math.acos(cosA)
    angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI
    angleAlpha.value = angleAlphaDegrees.toFixed(3)

    cosB = (coteA.value ** 2 - coteB.value ** 2 + coteC.value ** 2) / (2 * coteC.value * coteA.value)
    angleBetaRadians = Math.acos(cosB)
    angleBetaDegrees = (angleBetaRadians * 180) / Math.PI
    angleBeta.value = angleBetaDegrees.toFixed(3)

    cosC = (coteA.value ** 2 + coteB.value ** 2 - coteC.value ** 2) / (2 * coteA.value * coteB.value);
    angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)
    angleGammaRadians = Math.acos(cosC)
    angleGammaDegrees = (angleGammaRadians * 180) / Math.PI;
    //////////////


    // Formule de Héron pour trouver l'aire
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)
    ///////////

    // Calcul de la hauteur 
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)
    ///////////

    cosAMath = cosA.toFixed(3)
    cosBMath = cosB.toFixed(3)
    acar = coteA.value ** 2
    bcar = coteB.value ** 2
    ccar = coteC.value ** 2
    aValueE = coteA.value
    bValueE = coteB.value
    cValueE = coteC.value
    angleADG = angleAlphaDegrees.toFixed(3)
    angleBDG = angleBetaDegrees.toFixed(3)
    demiPEq = demiP.toFixed(3)
}