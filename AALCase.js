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

    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

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

    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

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

    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

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

    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

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

    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

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

    hauteurA.value = (aire.value * 2 / coteA.value).toFixed(3)
    hauteurB.value = (aire.value * 2 / coteB.value).toFixed(3)
    hauteurC.value = (aire.value * 2 / coteC.value).toFixed(3)

}