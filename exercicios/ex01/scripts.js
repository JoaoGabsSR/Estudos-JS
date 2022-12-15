function carregar() {
    var data = new Date(),
        hora = data.getHours(),
        divHora = document.querySelector('.hora'),
        divImg = document.querySelector('.imagem')

        // hora = 19 // Variavel de testes

    if (hora >= 5 && hora < 13) {
        divHora.innerHTML = `<p>São ${hora} horas, bom dia</p>`
        divImg.innerHTML = '<img src="img/amanhecer.jpg" alt="amanhecer">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 13 && hora < 18) {
        divHora.innerHTML = `<p>São ${hora} horas, boa tarde</p>`
        divImg.innerHTML = '<img src="img/entardecer.jpg" alt="entardecer">'
        document.body.style.background = 'orange'
    } else {
        divHora.innerHTML = `<p>São ${hora} horas, boa noite</p>`
        divImg.innerHTML = '<img src="img/anoitecer.jpg" alt="anoitecer">'
        document.body.style.background = 'gray'
    }
}