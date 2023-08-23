function LLA_B_C_Beta() {

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    sinnB = Math.sin(angleBetaRadians)

    sinnC = sinnB / coteB.value * coteC.value
    angleGammaRadians = Math.asin(sinnC)
    angleGammaDegrees = angleGammaRadians * (180 / Math.PI)
    angleGamma.value = angleGammaDegrees.toFixed(3)

    angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)
    angleAlphaDegrees = angleAlpha.value / (180 / Math.PI)

    sinnA = Math.sin(angleAlphaDegrees)

    coteA.value = (sinnA / sinnB * coteB.value).toFixed(3)

    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3) 

    hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
    hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
    hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)

    cosiA.value = Math.cos((angleAlpha.value * Math.PI) / 180).toFixed(3)
    cosiB.value = Math.cos((angleBeta.value * Math.PI) / 180).toFixed(3)
    cosiC.value = Math.cos((angleGamma.value * Math.PI) / 180).toFixed(3)

    sinA.value = sinnA.toFixed(3)
    sinB.value = sinnB.toFixed(3)
    sinC.value = sinnC.toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)
}

function LLA_B_C_Gamma() {

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    sinnC = Math.sin(angleGammaRadians)

    sinnB = sinnC / coteC.value * coteB.value
    angleBetaRadians = Math.asin(sinnB)
    angleBetaDegrees = angleBetaRadians * (180 / Math.PI)
    angleBeta.value = angleBetaDegrees.toFixed(3)

    angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)
    angleAlphaDegrees = angleAlpha.value / (180 / Math.PI)

    sinnA = Math.sin(angleAlphaDegrees)

    coteA.value = (sinnA / sinnC * coteC.value).toFixed(3)

    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
    hauteurB.value = (coteA.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
    hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)

    cosiA.value = Math.cos((angleAlpha.value * Math.PI) / 180).toFixed(3)
    cosiB.value = Math.cos((angleBeta.value * Math.PI) / 180).toFixed(3)
    cosiC.value = Math.cos((angleGamma.value * Math.PI) / 180).toFixed(3)

    sinA.value = sinnA.toFixed(3)
    sinB.value = sinnB.toFixed(3)
    sinC.value = sinnC.toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)
}

function LLA_A_B_Alpha() {

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    sinnA = Math.sin(angleAlphaRadians)

    sinnB = sinnA / coteA.value * coteB.value
    angleBetaRadians = Math.asin(sinnB)
    angleBetaDegrees = angleBetaRadians * (180 / Math.PI)
    angleBeta.value = angleBetaDegrees.toFixed(3)

    angleGamma.value = (180 - angleBeta.value - angleAlpha.value).toFixed(3)
    angleGammaDegrees = angleGamma.value / (180 / Math.PI)

    sinnC = Math.sin(angleGammaDegrees)

    coteC.value = (sinnC / sinnA * coteA.value).toFixed(3)

    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
    hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
    hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)

    cosiA.value = Math.cos((angleAlpha.value * Math.PI) / 180).toFixed(3)
    cosiB.value = Math.cos((angleBeta.value * Math.PI) / 180).toFixed(3)
    cosiC.value = Math.cos((angleGamma.value * Math.PI) / 180).toFixed(3)

    sinA.value = sinnA.toFixed(3)
    sinB.value = sinnB.toFixed(3)
    sinC.value = sinnC.toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)
}

function LLA_A_B_Beta() {

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    sinnB = Math.sin(angleBetaRadians)

    sinnA = sinnB / coteB.value * coteA.value
    angleAlphaRadians = Math.asin(sinnA)
    angleAlphaDegrees = angleAlphaRadians * (180 / Math.PI)
    angleAlpha.value = angleAlphaDegrees.toFixed(3)

    angleGamma.value = (180 - angleBeta.value - angleAlpha.value).toFixed(3)
    angleGammaDegrees = angleGamma.value / (180 / Math.PI)

    sinnC = Math.sin(angleGammaDegrees)

    coteC.value = (sinnC / sinnB * coteB.value).toFixed(3)

    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
    hauteurB.value = (coteB.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
    hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)

    cosiA.value = Math.cos((angleAlpha.value * Math.PI) / 180).toFixed(3)
    cosiB.value = Math.cos((angleBeta.value * Math.PI) / 180).toFixed(3)
    cosiC.value = Math.cos((angleGamma.value * Math.PI) / 180).toFixed(3)

    sinA.value = sinnA.toFixed(3)
    sinB.value = sinnB.toFixed(3)
    sinC.value = sinnC.toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)
}

function LLA_C_A_Gamma() {

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    sinnC = Math.sin(angleGammaRadians)

    sinnA = sinnC / coteC.value * coteA.value
    angleAlphaRadians = Math.asin(sinnA)
    angleAlphaDegrees = angleAlphaRadians * (180 / Math.PI)
    angleAlpha.value = angleAlphaDegrees.toFixed(3)

    angleBeta.value = (180 - angleGamma.value - angleAlpha.value).toFixed(3)
    angleBetaDegrees = angleBeta.value / (180 / Math.PI)

    sinnB = Math.sin(angleBetaDegrees)

    coteB.value = (sinnB / sinnC * coteC.value).toFixed(3)

    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

    hauteurA.value = (coteB.value * Math.sin(angleGamma.value * Math.PI / 180)).toFixed(3)
    hauteurB.value = (coteA.value * Math.sin(angleBeta.value * Math.PI / 180)).toFixed(3)
    hauteurC.value = (coteB.value * Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

    demiPeri.value = demiP.toFixed(3)

    perimetre.value = demiP * 2

    medianeA.value = (1/2 * Math.sqrt(2 * coteB.value ** 2 + 2 * coteC.value ** 2 - coteA.value ** 2)).toFixed(3)
    medianeB.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteC.value ** 2 - coteB.value ** 2)).toFixed(3)
    medianeC.value = (1/2 * Math.sqrt(2 * coteA.value ** 2 + 2 * coteB.value ** 2 - coteC.value ** 2)).toFixed(3)


    bissectriceA.value = (Math.sqrt(coteB.value * coteC.value * (1 - coteA.value ** 2 / (Number(coteB.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceB.value = (Math.sqrt(coteA.value * coteC.value * (1 - coteB.value ** 2 / (Number(coteA.value) + Number(coteC.value)) ** 2))).toFixed(3)
    bissectriceC.value = (Math.sqrt(coteA.value * coteB.value * (1 - coteC.value ** 2 / (Number(coteA.value) + Number(coteB.value)) ** 2))).toFixed(3)

    cosiA.value = Math.cos((angleAlpha.value * Math.PI) / 180).toFixed(3)
    cosiB.value = Math.cos((angleBeta.value * Math.PI) / 180).toFixed(3)
    cosiC.value = Math.cos((angleGamma.value * Math.PI) / 180).toFixed(3)

    sinA.value = sinnA.toFixed(3)
    sinB.value = sinnB.toFixed(3)
    sinC.value = sinnC.toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)
}

function LLA_C_A_Alpha() {

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    sinnA = Math.sin(angleAlphaRadians)

    sinnC = sinnA / coteA.value * coteC.value
    angleGammaRadians = Math.asin(sinnC)
    angleGammaDegrees = angleGammaRadians * (180 / Math.PI)
    angleGamma.value = angleGammaDegrees.toFixed(3)

    angleBeta.value = (180 - angleGamma.value - angleAlpha.value).toFixed(3)
    angleBetaDegrees = angleBeta.value / (180 / Math.PI)

    sinnB = Math.sin(angleBetaDegrees)

    coteB.value = (sinnB / sinnC * coteC.value).toFixed(3)

    demiP = (Number(coteC.value) + Number(coteB.value) + Number(coteA.value)) / 2

    aire.value = (Math.sqrt(demiP * (demiP - coteA.value) * (demiP - coteB.value) * (demiP - coteC.value))).toFixed(3)

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

    cosiA.value = Math.cos((angleAlpha.value * Math.PI) / 180).toFixed(3)
    cosiB.value = Math.cos((angleBeta.value * Math.PI) / 180).toFixed(3)
    cosiC.value = Math.cos((angleGamma.value * Math.PI) / 180).toFixed(3)

    sinA.value = sinnA.toFixed(3)
    sinB.value = sinnB.toFixed(3)
    sinC.value = sinnC.toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)
}