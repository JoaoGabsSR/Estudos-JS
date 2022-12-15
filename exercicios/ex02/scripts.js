function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('year')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {

        window.alert("[ERRO] Dados informados incorretos, verifique e tente novamente!")

    } else {

        var fsexMas = document.getElementById('mas')
        var fsexFem = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsexMas.checked) {

            genero = 'Homem'

            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'img/img-homens/homem-crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/img-homens/homem-adolescente.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/img-homens/homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'img/img-homens/homem-idoso.jpg')
            }

        } else if (fsexFem.checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'img/img-mulheres/mulher-crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/img-mulheres/mulher-adolescente.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/img-mulheres/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'img/img-mulheres/mulher-idosa.jpg')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}