function parimp(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

const soma = (num1=0, num2=0) => {
    return num1 + num2
}

const fatorial = function (num) {
    let fat = 1
    for (let c = num; c > 1; c--) {
        fat *= c
    }

    return fat
}

function fat (num) {
    if (num == 1) {
        return 1
    } else {
        return num * fat(num-1)
    }
}

console.log(`${fat(5)}`)

// let resp = parimp(11) 
// console.log(`${resp}`)

// let resp = soma(12, 24)
// console.log(`${resp}`)

// let resp = fatorial(5) 
// console.log(`${resp}`)
