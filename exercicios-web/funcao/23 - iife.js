// IIFE -> Immediately Invoked Function Expression

(function() { // uma forma de fugir do escopo global
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()