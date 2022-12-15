function contar() {
    let start = document.querySelector('#start')
    let end = document.querySelector('#end')
    let count = document.querySelector('#count')
    let res = document.querySelector('div#res')

    if (start.value == 0 || end.value == 0 || count.value == 0) {
        res.innerHTML = 'Imposível Contar!'
        // window.alert('[ERRO] Dados não informados')
    } else {
        res.innerHTML = 'Contanto: <br>'

        let ini = parseInt(start.value)
        let fim = parseInt(end.value)
        let con = parseInt(count.value)

        if (con <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            con = 1
        }

        if (ini < fim) {
            for (let c = ini; c <= fim; c+= con) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = ini; c >= fim; c -= con) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }

        res.innerHTML += '\u{1F3C1}'
    }
}