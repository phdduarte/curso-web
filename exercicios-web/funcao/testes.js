const aprovados = ['pai', 'mae', 'fernanda', 'Gra']

const aprovados2 = []
const armazenar = function(nome, indice){
    if (indice % 2 == 0){    
        aprovados[indice] = nome
    }
    else{
        aprovados[indice] = "teste"
    }    
}

aprovados.forEach(armazenar)
console.log(aprovados)