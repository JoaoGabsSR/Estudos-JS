/*
    - Quantidade de números;
    - Maior valor informado;
    - Menor valor informado;
    - Soma de todos os valores;
    - Média de todos os valores;
*/

const num = document.querySelector('#num-input')
const select = document.querySelector('#select')
const res = document.querySelector('#res')
const nums = []

// Função utilizada para alguns testes
// function show() {
//     console.log(nums)
// }

// Verifica se o numero esta entre 1 e 100
const numberIsBetween = (number) => {
    if (Number(number) >= 1 && Number(number) <= 100) {
        return true
    } else {
        return false
    }
}

// Verifica se o numero ja esta na lista
const isInList = (number=0, list=[]) => {
    if (list.indexOf(number) != -1) {
        return false
    } else {
        return true
    }
}

// Adiciona o numero na lista
const addNumber = () => {
    let n = num.value

    if (n == '') {
        window.alert('[ERRO] Nenhum valor informado!')
    } else if (isNaN(n)) {
        window.alert('[ERRO] Valor digitado não é um número!')
    } else {
        let nConvert = parseInt(n)

        if (numberIsBetween(nConvert)) {
            if (isInList(nConvert, nums)){
                nums.push(nConvert)

                let item = document.createElement('option')
                item.text = `Valor adicionado: ${nConvert}`
                item.value = `${nConvert}`
                select.appendChild(item)
            } else {
                window.alert('[ERRO] Número digitado já Adicionado anteriormente!')
            }
        } else {
            window.alert('[ERRO] O número informado é não está entre 1 e 100!')
        }
    }
}

// Realiza a analise de dados da lista e informa a analise no front
const verify = () => {
    if (nums.length == 0) {
        window.alert('[ERRO] Lista vazia!')
    } else {
        res.innerHTML = ''

        let quant = nums.length
        let maior = nums[0]
        let menor = nums[0]
        let sum = 0
        let med = 0
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < menor) {
                menor = nums[i]
            }
            if (nums[i] > maior) {
                maior = nums[i]
            }

            sum += nums[i]
        }

        med = sum / nums.length

        res.innerHTML += `<p>Quantidade de números digitados: ${quant}</p>`
        res.innerHTML += `<p>Ò maior número foi: ${maior}</p>`
        res.innerHTML += `<p>Ò maior número foi: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${sum}</p>`
        res.innerHTML += `A média dos valores é: ${med}`
    }
}