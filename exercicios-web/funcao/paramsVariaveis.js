function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

function imprimir() {
    for (const key in arguments) {
        console.log(arguments[key])
    }
}  



console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))

imprimir(1,3,4,5,6,7,8,9,10,100)
imprimir("teste")