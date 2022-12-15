function calcular() {
    let num = document.querySelector('#num-input')
    let res = document.querySelector('#tabuada')

    if (num.value == '') {
        window.alert('[ERRO] Nenhum valor digitado')
    } else {
        let n = parseInt(num.value)

        res.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            res.appendChild(item)
        }
    }
}