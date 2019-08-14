aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados)
console.log(aprovados[3])

console.log(aprovados[3] === undefined)

aprovados.push("Teste")

console.log(aprovados)

aprovados[9] = 10

console.log(aprovados)

console.log(aprovados.sort())

delete aprovados[1]

console.log(aprovados)

console.log(aprovados[1] === undefined)