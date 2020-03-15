function Pessoa(nome) {
    this.nome = nome // Aqui com this a variavel passa a ser publica 

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()