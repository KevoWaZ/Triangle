function AAL_Gamma_Beta_C() {
    angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    sinnC = Math.sin(angleGammaRadians)
    sinnB = Math.sin(angleBetaRadians)

    coteB.value = (sinnB / sinnC * coteC.value).toFixed(3)

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)
    sinnA = Math.sin(angleAlphaRadians)

    coteA.value = (sinnA / sinnC * coteC.value).toFixed(3)

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

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)

}

function AAL_Gamma_Beta_B() {
    angleAlpha.value = (180 - angleGamma.value - angleBeta.value).toFixed(3)

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    sinnC = Math.sin(angleGammaRadians)
    sinnB = Math.sin(angleBetaRadians)
    sinnA = Math.sin(angleAlphaRadians)

    coteA.value = (sinnA / sinnB * coteB.value).toFixed(3)

    coteC.value = (sinnC / sinnA * coteA.value).toFixed(3)

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

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)

}

function AAL_Alpha_Gamma_A() {
    angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    sinnA = Math.sin(angleAlphaRadians)
    sinnC = Math.sin(angleGammaRadians)

    coteC.value = (sinnC / sinnA * coteA.value).toFixed(3)

    angleBetaRadians = angleBeta.value * (Math.PI / 180)
    sinnB = Math.sin(angleBetaRadians)

    coteB.value = (sinnB / sinnA * coteA.value).toFixed(3)

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

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)

}

function AAL_Alpha_Gamma_C() {
    angleBeta.value = (180 - angleAlpha.value - angleGamma.value).toFixed(3)

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    sinnA = Math.sin(angleAlphaRadians)
    sinnB = Math.sin(angleBetaRadians)
    sinnC = Math.sin(angleGammaRadians)

    coteB.value = (sinnB / sinnC * coteC.value).toFixed(3)

    coteA.value = (sinnA / sinnC * coteC.value).toFixed(3)

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

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)

}

function AAL_Beta_Alpha_B() {
    angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    sinnA = Math.sin(angleAlphaRadians)
    sinnB = Math.sin(angleBetaRadians)

    coteA.value = (sinnA / sinnB * coteB.value).toFixed(3)

    angleGammaRadians = angleGamma.value * (Math.PI / 180)
    sinnC = Math.sin(angleGammaRadians)

    coteC.value = (sinnC / sinnA * coteA.value).toFixed(3)

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

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)

}

function AAL_Beta_Alpha_A() {
    angleGamma.value = (180 - angleAlpha.value - angleBeta.value).toFixed(3)

    angleBetaRadians = angleBeta.value * (Math.PI / 180)

    angleAlphaRadians = angleAlpha.value * (Math.PI / 180)

    angleGammaRadians = angleGamma.value * (Math.PI / 180)

    sinnA = Math.sin(angleAlphaRadians)
    sinnB = Math.sin(angleBetaRadians)
    sinnC = Math.sin(angleGammaRadians)

    coteC.value = (sinnC / sinnA * coteA.value).toFixed(3)

    coteB.value = (sinnB / sinnC * coteC.value).toFixed(3)

    // Formule de Héron pour trouver l'aire
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

    sinA.value = Math.sin((angleAlpha.value * Math.PI) / 180).toFixed(3)
    sinB.value = Math.sin((angleBeta.value * Math.PI) / 180).toFixed(3)
    sinC.value = Math.sin((angleGamma.value * Math.PI) / 180).toFixed(3)

    tanA.value = Math.tan((angleAlpha.value * Math.PI) / 180).toFixed(3)
    tanB.value = Math.tan((angleBeta.value * Math.PI) / 180).toFixed(3)
    tanC.value = Math.tan((angleGamma.value * Math.PI) / 180).toFixed(3)

}