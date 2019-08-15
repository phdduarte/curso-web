// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa//retira da estruta a variavel com o mesmo nome colocada la dentro
console.log(nome, idade)

const { nome: n, idade: i } = pessoa//retira da estrutura variaveis porém coloca em nomes diferentes
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa//passa um valor padrao caso nao receba nada
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa//nao da para acessar pq pessoa nao tem conta
console.log(ag, num)