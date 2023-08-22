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
}