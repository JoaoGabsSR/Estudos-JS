// var area = document.querySelector('#area')

// const clicar = () => {
//     area.innerText = 'Clicou!'
//     area.style.background = 'red'
// }

// const entrar = () => {
//     area.innerText = 'Entrou!'
// }

// const sair = () => {
//     area.innerText = 'Saiu!'
// }

// area.addEventListener('click', clicar)
// area.addEventListener('mouseenter', entrar)
// area.addEventListener('mouseout', sair)



function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('#txtn2')
    var res = document.getElementById('res')
    var n1 = parseFloat(tn1.value)
    var n2 = parseFloat(tn2.value)
    var s = n1 + n2
    res.innerHTML = `Resultado: <strong>${s}</strong>; Números somados: <strong>${n1}</strong>, <strong>${n2}</strong>`
}
