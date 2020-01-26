function soma() {
    let soma = 0
    for (i in arguments) { // vai recuperar os parametros da funcao mesmo que ela nao passse nada
        soma += arguments[i] // arguments é um array interno de uma função
    }
    return soma
}

function imprimir() {
    for (const key in arguments) {
        console.log(arguments[key])
    }
}  

console.log("SOMA VAZIO:",soma())
console.log("SOMA 1:",soma(1))
console.log("SOMA 1.1,2.2,3.3:",soma(1.1, 2.2, 3.3))

// Passando string em uma funcao esperando numero
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))

imprimir(1,3,4,5,6,7,8,9,10,100)
imprimir("teste")