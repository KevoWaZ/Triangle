let ajout = document.querySelector('.equation')

// CAS LLL

function LLLEquation() {
    let ajout = document.querySelector('.equation')

    // Loi des cosinus pour l'angle en A
    let cosA = document.createElement("h1")
    cosA.id = "cosA"
    cosA.innerHTML = `\\(\\cos\\alpha =\\frac{-a²+b²+c²}{2bc}=${cosAMath}\\)`
    ajout.appendChild(cosA)


    let anglAnglpha = document.createElement("h1")
    anglAnglpha.id = anglAnglpha
    anglAnglpha.innerHTML = `\\(\\alpha = \acos(${cosAMath}) =${angleADG} °\\)`
    ajout.appendChild(anglAnglpha)

    // Loi des cosinus pour l'angle en B
    let cosB = document.createElement("h1")
    cosB.id = "cosB"
    cosB.innerHTML = `\\(\\cos \\beta = \\frac{a²-b²+c²}{2\\times c \\times a}=${cosBMath}\\)`
    ajout.append(cosB)


    let anglAnglbeta = document.createElement("h1")
    anglAnglbeta.id = anglAnglbeta
    anglAnglbeta.innerHTML = `\\(\\beta = \acos(${cosBMath}) =${angleBDG} °\\)`
    ajout.appendChild(anglAnglbeta)


    // Trouver angle C
    let GFromAB = document.createElement("h1")
    GFromAB.id = "equation"
    GFromAB.innerHTML = `\\(\\gamma =180 - \\beta - \\alpha =${angleGamma.value}° \\)`
    ajout.appendChild(GFromAB)

    let cosC = document.createElement("h1")
    cosC.id = "cosC"
    cosC.innerHTML = `\\(\\cos \\gamma = \cos(${angleCDG}) =${cosCMath} \\)`
    ajout.append(cosC)

    // Aire avec formule de Héron
    let DemiPe = document.createElement("h1")
    DemiPe.id = "DemiP"
    DemiPe.innerHTML = `\\(S = \\frac{{a + b + c}}{2} = ${demiPEq}\\)`
    ajout.appendChild(DemiPe)

    // Calcul de l'aire toujours avec la formule de Héron
    let AirV = document.createElement("h1")
    AirV.id = "aire"
    AirV.innerHTML = `\\(A=\\sqrt{(s(s-a)(s-b)(s-b))}=${aire.value}\\)`
    ajout.appendChild(AirV)

    let hautA = document.createElement("h1")
    hautA.id = "hautA"
    hautA.innerHTML = `\\(h_{a} = A * 2 / a = ${hauteurA.value}\\)`
    ajout.appendChild(hautA)

    let hautB = document.createElement("h1")
    hautB.id = "hautB"
    hautB.innerHTML = `\\(h_{b} = A * 2 / b = ${hauteurB.value}\\)`
    ajout.appendChild(hautB)

    let hautC = document.createElement("h1")
    hautC.id = "hautB"
    hautC.innerHTML = `\\(h_{a} = A * 2 / c = ${hauteurC.value}\\)`
    ajout.appendChild(hautC)

    let medA = document.createElement("h1")
    medA.id = "medA"
    medA.innerHTML = `\\(m_{a} = \\frac{1}{2}\\sqrt{2b²+2c²-a²} = ${medianeA.value}\\)`
    ajout.appendChild(medA)

    let medB = document.createElement("h1")
    medB.id = "medB"
    medB.innerHTML = `\\(m_{b} = \\frac{1}{2}\\sqrt{2a²+2c²-b²} = ${medianeB.value}\\)`
    ajout.appendChild(medB)

    let medC = document.createElement("h1")
    medC.id = "medC"
    medC.innerHTML = `\\(m_{c} = \\frac{1}{2}\\sqrt{2a²+2b²-c²} = ${medianeC.value}\\)`
    ajout.appendChild(medC)

    let bisA = document.createElement("h1")
    bisA.id = "bisA"
    bisA.innerHTML = `\\(I_{a} = \\sqrt{bc(1-\\frac{a²}{(b+c)²})} = ${bissectriceA.value}\\)`
    ajout.appendChild(bisA)

    let bisB = document.createElement("h1")
    bisB.id = "bisB"
    bisB.innerHTML = `\\(I_{b} = \\sqrt{ac(1-\\frac{b²}{(a+c)²})} = ${bissectriceB.value}\\)`
    ajout.appendChild(bisB)

    let bisC = document.createElement("h1")
    bisC.id = "bisC"
    bisC.innerHTML = `\\(I_{c} = \\sqrt{ab(1-\\frac{c²}{(a+b)²})} = ${bissectriceC.value}\\)`
    ajout.appendChild(bisC)

    let sinA = document.createElement("h1")
    sinA.id = "sinA"
    sinA.innerHTML = `\\(\\sin \\alpha = \sin(${angleADG}) =${sinAMath.value}\\)`
    ajout.append(sinA)

    let sinB = document.createElement("h1")
    sinB.id = "sinB"
    sinB.innerHTML = `\\(\\sin \\beta = \sin(${angleBDG}) =${sinBMath.value}\\)`
    ajout.append(sinB)

    let sinC = document.createElement("h1")
    sinC.id = "sinC"
    sinC.innerHTML = `\\(\\sin \\gamma = \sin(${angleCDG}) =${sinCMath.value}\\)`
    ajout.append(sinC)

    let tanA = document.createElement("h1")
    tanA.id = "tanA"
    tanA.innerHTML = `\\(\\tan \\alpha = \tan(${angleADG}) =${tanAMath.value}\\)`
    ajout.append(tanA)

    let tanB = document.createElement("h1")
    tanB.id = "tanB"
    tanB.innerHTML = `\\(\\tan \\beta = \tan(${angleBDG}) =${tanBMath.value}\\)`
    ajout.append(tanB)

    let tanC = document.createElement("h1")
    tanC.id = "tanC"
    tanC.innerHTML = `\\(\\tan \\gamma = \tan(${angleCDG}) =${tanCMath.value}\\)`
    ajout.append(tanC)

    MathJax.typesetPromise()
}




// TROUVER ANGLE A PARTIR DE DEUX ANGLES

function angleGammaFromBetaAlphaEquation() {
    let ajout = document.querySelector('.equation')
    let alert = document.createElement("h2")
    alert.id = "alert"
    alert.innerHTML = "Cas AAA, il n'est pas possible de résoudre un triangle avec seulement 3 angles!!"
    ajout.appendChild(alert)
    let equationP = document.createElement("h2")
    equationP.id = "equation"
    equationP.innerHTML = `\\(\\gamma =180 - \\beta - \\alpha =${angleGamma.value}° \\)`
    ajout.appendChild(equationP)
    let sans = document.createElement("h2")
    sans.id = "sans"
    sans.innerHTML = `\\(\\gamma =180 - ${angleBeta.value} - ${angleAlpha.value} =${angleGamma.value}° \\)`
    ajout.appendChild(sans)
    MathJax.typesetPromise()
}
function angleBetaFromAlphaGammaEquation() {
    let ajout = document.querySelector('.equation')
    let alert = document.createElement("h2")
    alert.id = "alert"
    alert.innerHTML = "Cas AAA, il n'est pas possible de résoudre un triangle avec seulement 3 angles!!"
    ajout.appendChild(alert)
    let equationP = document.createElement("h2")
    equationP.id = "equation"
    equationP.innerHTML = `\\(\\beta =180 - \\alpha - \\gamma =${angleBeta.value}° \\)`
    ajout.appendChild(equationP)
    let sans = document.createElement("h2")
    sans.is = "sans"
    sans.innerHTML = `\\(\\beta =180 - ${angleAlpha.value} - ${angleGamma.value} =${angleBeta.value}° \\)`
    ajout.appendChild(sans)
    MathJax.typesetPromise()
}
function angleAlphaFromGammaBetaEquation() {
    let ajout = document.querySelector('.equation')
    let alert = document.createElement("h2")
    alert.id = "alert"
    alert.innerHTML = "Cas AAA, il n'est pas possible de résoudre un triangle avec seulement 3 angles!!"
    ajout.appendChild(alert)
    let equationP = document.createElement("h2")
    equationP.id = "equation"
    equationP.innerHTML = `\\(\\alpha =180 - \\beta - \\gamma =${angleAlpha.value}° \\)`
    ajout.appendChild(equationP)
    let sans = document.createElement("h2")
    sans.is = "sans"
    sans.innerHTML = `\\(\\alpha =180 - ${angleBeta.value} - ${angleGamma.value} =${angleAlpha.value}° \\)`
    ajout.appendChild(sans)
    MathJax.typesetPromise()
}