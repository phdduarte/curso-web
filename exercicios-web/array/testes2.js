const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const texto = '{ "nome": "Borracha", "preco": 3.45 }'
const texto2 = texto.replace(/\s/g,"").replace("}","")
const texto3 = texto2.split(":")
console.log(texto3[2])
