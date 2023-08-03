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