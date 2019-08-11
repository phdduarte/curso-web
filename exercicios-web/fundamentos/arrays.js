const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

const x = valores.push(3)
console.log("Push return:" + x)
console.log(valores)

let shift = valores.shift()
console.log("Valores depois do shift: "+valores)

console.log("Valores return do shift: "+shift)

console.log(valores.pop())
delete valores[2]
console.log(valores)

console.log(typeof valores)