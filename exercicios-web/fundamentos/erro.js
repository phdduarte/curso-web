function tratarErroELancar(erro) {
    //throw new Error('Aqui vai imprimir essa mensagem quando executar esse erro')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
console.log(obj)
let upper = imprimirNomeGritado(obj)

