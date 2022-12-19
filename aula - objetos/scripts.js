let amigo = {
    'nome' : 'José Antônio',
    'sexo' : 'M',
    'peso' : 85.4,
    engordar: function(p=0) {
        this.peso += p
    },
    dizerNome: function() {
        console.log(`Meu nome é ${this.nome}`)
    },
}

console.log(amigo)
console.log(amigo.nome)
console.log(typeof(this))
console.log(amigo.dizerNome())