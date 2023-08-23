function ALA_Beta_C_Alpha() {
        
    angleGamma.value = 180 - angleAlpha.value - angleBeta.value

    let coteAvalue = (coteC.value * Math.sin((angleAlpha.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
    coteA.value = coteAvalue.toFixed(3)

    let coteBvalue = (coteC.value * Math.sin((angleBeta.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
    coteB.value = coteBvalue.toFixed(3)

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

function ALA_Alpha_B_Gamma() {
    
    angleBeta.value = 180 - angleAlpha.value - angleGamma.value

    let coteCvalue = (coteB.value * Math.sin((angleGamma.value * Math.PI) / 180)) / Math.sin((angleBeta.value * Math.PI) / 180)
    coteC.value = coteCvalue.toFixed(3)

    let coteAvalue = (coteC.value * Math.sin((angleAlpha.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
    coteA.value = coteAvalue.toFixed(3)

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

function ALA_Gamma_A_Beta() {
    
    angleAlpha.value = 180 - angleBeta.value - angleGamma.value

    coteC.value = ((coteA.value * Math.sin(angleGamma.value * Math.PI / 180)) / Math.sin(angleAlpha.value * Math.PI / 180)).toFixed(3)

    let coteBvalue = (coteC.value * Math.sin((angleBeta.value * Math.PI) / 180)) / Math.sin((angleGamma.value * Math.PI) / 180)
    coteB.value = coteBvalue.toFixed(3)

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