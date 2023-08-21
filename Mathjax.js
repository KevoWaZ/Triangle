let ajout = document.querySelector('.equation')

// CAS LLL

function LLLEquation() {
    let ajout = document.querySelector('.equation')

    // Loi des cosinus pour l'angle en A
    let cosA = document.createElement("h1")
    cosA.id = "cosA"
    cosA.innerHTML = `\\(\\cos\\alpha =\\frac{-a²+b²+c²}{2bc}=${cosAMath}\\)`
    ajout.appendChild(cosA)

    let cosAbrut = document.createElement("h1")
    cosAbrut.id = "cosAbrut"
    cosAbrut.innerHTML = `\\(\\cos\\alpha = \\frac{-${acar} + ${bcar} + ${ccar}}{2 \\times ${bValueE} \\times ${cValueE}} = ${cosAMath}\\)`
    ajout.appendChild(cosAbrut)

    let anglAnglpha = document.createElement("h1")
    anglAnglpha.id = anglAnglpha
    anglAnglpha.innerHTML = `\\(\\alpha = \acos(${cosAMath}) =${angleADG} °\\)`
    ajout.appendChild(anglAnglpha)

    // Loi des cosinus pour l'angle en B
    let cosB = document.createElement("h1")
    cosB.id = "cosB"
    cosB.innerHTML = `\\(\\cos \\beta = \\frac{a²-b²+c²}{2\\times c \\times a}=${cosBMath}\\)`
    ajout.append(cosB)

    let cosBbrut = document.createElement("h1")
    cosBbrut.id = "cosBrut"
    cosBbrut.innerHTML = `\\(\\cos \\beta = \\frac{${acar} - ${bcar} + ${ccar}}{2\\times ${cValueE} \\times ${aValueE}}=${cosBMath}\\)`
    ajout.append(cosBbrut)

    let anglAnglbeta = document.createElement("h1")
    anglAnglbeta.id = anglAnglbeta
    anglAnglbeta.innerHTML = `\\(\\beta = \acos(${cosBMath}) =${angleBDG} °\\)`
    ajout.appendChild(anglAnglbeta)


    // Trouver angle C
    let GFromAB = document.createElement("h1")
    GFromAB.id = "equation"
    GFromAB.innerHTML = `\\(\\gamma =180 - \\beta - \\alpha =${angleGamma.value}° \\)`
    ajout.appendChild(GFromAB)
    let GFromABBrut = document.createElement("h1")
    GFromABBrut.id = "sans"
    GFromABBrut.innerHTML = `\\(\\gamma =180 - ${angleBeta.value} - ${angleAlpha.value} =${angleGamma.value}° \\)`
    ajout.appendChild(GFromABBrut)

    // Aire avec formule de Héron
    let DemiPe = document.createElement("h1")
    DemiPe.id = "DemiP"
    DemiPe.innerHTML = `\\(S = \\frac{{${aValueE} + ${bValueE} + ${cValueE}}}{2} = ${demiPEq}\\)`
    ajout.appendChild(DemiPe)

    // Calcul de l'aire toujours avec la formule de Héron
    let AirV = document.createElement("h1")
    AirV.id = "aire"
    AirV.innerHTML = `\\(A=\\sqrt{(s(s-a)(s-b)(s-b))}=${aire.value}\\)`
    ajout.appendChild(AirV)

    let AirVbrut = document.createElement("h1")
    AirVbrut.id = "aire"
    AirVbrut.innerHTML = `\\(A=\\sqrt{(${demiPEq}(${demiPEq}-${aValueE})(${demiPEq}-${bValueE})(${demiPEq}-${cValueE}))}=${aire.value}\\)`
    ajout.appendChild(AirVbrut)

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