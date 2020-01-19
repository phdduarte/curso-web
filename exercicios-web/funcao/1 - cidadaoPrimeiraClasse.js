/**
 * Anotacoes da aula cidadao de primeira classe
 * 
 * Função em JS é First-Class Object (Citizens)
 * Higher-order function
 * Isso significa que voce pode tratar funcao como um objeto.
 * Antigamente ficava separado o objeto e a funcao e agora eles podem ser tratados 
 * Podemos trabalhar dentro do JS - POO, funcional, estrutural.
 * 
 * Author: Pedro Duarte
 * 
 */


// criar de forma literal
// Retorna por padrão undefined
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { } // Aqui é uma funcao anonima para voce chamar pode chamar a constante com ()

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)