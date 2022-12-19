// console.log('O console funcional perfeitamente')

// var vel = 15

// if (vel > 60) {
//     console.log(`Você ultrapassou a velocidade máxima permitida(60 KM)! Sua velocidade marcada foi ${vel}, você foi MULTADO!`)
// } else {
//     console.log(`Sua velocidade marcada é de ${vel}. Dirija sempre usando cinto de segurança`)
// }

// var pais = 'EUA'

// if (pais == 'Brasil') {
//     console.log('Você é brasileiro')
// } else {
//     console.log('Você é estrangeiro')
// }

// var idade = 12
// if (idade < 16) {
//     console.log('Você não votar!')
// } else if (idade < 18 || idade > 65) {
//     console.log('Voto opcional')
// } else {
//     console.log('Voto obrigatório')
// }

// var agora = new Date()
// var hora = agora.getHours()
// console.log(hora)
// if (hora < 12) {
//     console.log(`Bom dia!`)
// } else if (hora >= 12 && hora < 18) {
//     console.log(`Boa tarde!`)
// } else {
//     console.log(`Boa noite!`)
// }

// var diaSemana = agora.getDay()
// console.log(diaSemana)

// switch (diaSemana){
//     case 0:
//         console.log(`Domingo`)
//         break
//     case 1:
//         console.log(`Segunda`)
//         break
//     case 2:
//         console.log(`Terça`)
//         break
//     case 3:
//         console.log(`Quarta`)
//         break
//     case 4:
//         console.log(`Quinta`)
//         break
//     case 5:
//         console.log(`Sexta`)
//         break
//     case 6:
//         console.log(`Sábado`)
//         break
//     default:
//         console.log(`[ERRO] Dia recebido inválido`)
//         break
// }

// function calcular() {
//     var txtv = document.getElementById('txtvel')
//     var res = document.querySelector('#res')
//     var vel = parseFloat(txtv.value)

//     // Limpar o res
//     res.innerHTML = ``

//     res.innerHTML += `<p>Sua velocidade foi de <strong>${vel}</strong></p>`

//     if (vel > 60) {
//         res.innerHTML += `<p>Você foi multado, sua velocidade excedeu o limite de 60 Km/H</p>`
//     } else {
//         res.innerHTML += `<p>Você não foi multado</p>`
//     }

//     res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`
// }
