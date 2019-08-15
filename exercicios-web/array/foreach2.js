Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

Array.prototype.sort2 = function(callback){
    let length = this.length;
    for (let i = 1; i < length; i++) {
        let key = this[i];
        let j = i - 1;
        while (j >= 0 && this[j] > key) {
            this[j + 1] = this[j];
            j = j - 1;
        }
        this[j + 1] = key;
    }
    return callback(this);
}

aprovados.sort2(function(aprovados) {
    console.log(`${aprovados}`)
})

console.log(aprovados.sort())

