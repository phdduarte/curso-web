const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // nome diferente chave valor
const obj2 = { a, b, c } // apenas nome da chave e o valor dentro da variável
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}
console.log(obj5)