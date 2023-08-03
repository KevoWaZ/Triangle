function angleGammaFromBetaAlphaEquation() {
    let ajout = document.querySelector('.equation')
    let equationP = document.createElement("h2")
    equationP.id = "equation"
    equationP.innerHTML = `\\(\\gamma =180 - \\beta - \\alpha =${angleGamma.value}° \\)`
    ajout.appendChild(equationP)
    let sans = document.createElement("h2")
    sans.is = "sans"
    sans.innerHTML = `\\(\\gamma =180 - ${angleBeta.value} - ${angleAlpha.value} =${angleGamma.value}° \\)`
    ajout.appendChild(sans)
    MathJax.typesetPromise()
}
function angleBetaFromAlphaGammaEquation() {
    let ajout = document.querySelector('.equation')
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