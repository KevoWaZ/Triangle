// TROUVER TOUTES LES VALEURS D'UN TRIANGLE A PARTIR DES COTES CAS LLL

function LLL() {
    // Calcul des angles en utilisant la loi des cosinus
    cosA = ((-Math.pow(coteA.value, 2)) + coteB.value ** 2 + coteC.value ** 2) / (2 * coteB.value * coteC.value);
    angleAlphaRadians = Math.acos(cosA);
    angleAlphaDegrees = (angleAlphaRadians * 180) / Math.PI;
    angleAlpha.value = parseFloat(angleAlphaDegrees).toFixed(3);

    cosB = (coteA.value ** 2 - coteB.value ** 2 + coteC.value ** 2) / (2 * coteC.value * coteA.value);
    angleBetaRadians = Math.acos(cosB);
    angleBetaDegrees = (angleBetaRadians * 180) / Math.PI;
    angleBeta.value = angleBetaDegrees.toFixed(3);

    angleGammaDegrees = (180 - angleAlpha.value - angleBeta.value)
    angleGamma.value = angleGammaDegrees.toFixed(3)
    cosC = Math.cos((angleGamma.value * Math.PI) / 180)

    // Formule de Héron pour calculer l'aire
    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2;
    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3);

    // Calcul des hauteurs relatives aux côtés
    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3);
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3);
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3);

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)

    cosiA.value = cosA.toFixed(3)
    cosiB.value = cosB.toFixed(3)
    cosiC.value = cosC.toFixed(3)

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    if (Math.abs(angleAlpha.value - 90) < 0.001) {
        alert("La tangente de 90 et infini")
    } else {
        tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    }

    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)


    // Arrondi des valeurs pour utilisation ultérieure
    cosAMath = cosA.toFixed(3);
    cosBMath = cosB.toFixed(3);
    cosCMath = cosC.toFixed(3);
    acar = coteA.value ** 2;
    bcar = coteB.value ** 2;
    ccar = coteC.value ** 2;
    aValueE = coteA.value;
    bValueE = coteB.value;
    cValueE = coteC.value;
    angleADG = angleAlphaDegrees.toFixed(3);
    angleBDG = angleBetaDegrees.toFixed(3);
    angleCDG = angleGammaDegrees.toFixed(3)
    demiPEq = demiP.toFixed(3);
    sinAMath = sinA
    sinBMath = sinB
    sinCMath = sinC
    tanAMath = tanA
    tanBMath = tanB
    tanCMath = tanC
}