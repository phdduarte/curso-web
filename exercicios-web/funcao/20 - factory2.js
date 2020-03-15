function criarProduto(nome, preco, desconto = 0.1) { //valor padrao sendo passado na funcao se caso nao receber
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))