function verificarLados() {
    let inLadoA = document.getElementById('inLadoA')
    let inLadoB = document.getElementById('inLadoB')
    let inLadoC = document.getElementById('inLadoC')
    let outSituacao = document.getElementById('outSituacao')
    let outTipo = document.getElementById('outTipo')

    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)

    if (ladoA <= ladoB + ladoC && ladoB <= ladoA + ladoC && ladoC <= ladoA + ladoB) {
        outSituacao.innerHTML = `Lados podem formar um triângulo.`
            if (ladoA === ladoB && ladoB === ladoC) {
                outTipo.innerHTML = `Tipo Equilátero.`
            } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                outTipo.innerHTML = `Tipo Isósceles.`
            } else if (ladoA != ladoB && ladoB != ladoC) {
                outTipo.innerHTML = `Tipo Escaleno.`
            }      
    } else {
        outSituacao.innerHTML = `Lados não podem formar um triângulo.`
    }
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarLados)