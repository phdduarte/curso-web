class Pessoa {
    constructor(nome) {
        this.nome = nome // Aqui com this a variavel passa a ser publica 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

class Comunidade {
    constructor(nome='Comunidade sem nome') {
        this.nome = nome
        this.listaPessoa = []
    }

    addComunidade(Pessoa) {
        this.listaPessoa.push(Pessoa)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

/** Add pessoas a comunidade */
const comunidade1 = new Comunidade('Primeira comunidade')

comunidade1.addComunidade(p1)

console.log(comunidade1)