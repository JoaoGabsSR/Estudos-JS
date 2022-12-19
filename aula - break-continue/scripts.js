for (let i = 0; i < 10; i++) {
    console.log(i)

    if (i == 5) {
        break
    }
}

console.log('Deu break!')

var x = 0

while (x < 100) {
    x += 10

    if (x === 60) {
        console.log('continue')
        continue
    }

    console.log('Testanto o continue ' + x)
}