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