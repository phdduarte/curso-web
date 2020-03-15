// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(typeof(criarPessoa())) // A factory deve retornar um objeto