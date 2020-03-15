const valor = 'Global'

function minhaFuncao() { // contexto lexico dela é dentro do arquivo
    console.log(valor) // quando a funcao é declarada em JS ela tambem sabe onde ela foi definida
} // entao ela busca o valor de forma global porque ela foi definda globalmente dentro do arquivo

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()