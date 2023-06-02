const numeros = [43, 50, 65, 12]

//Forma mais atual
const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

// A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.

// Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

// outra forma

const soma1 = numeros.reduce(function (acum, atual) {
    return atual + acum
}, 0)

// outra forma 

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma2 = numeros.reduce(operacaoNumerica, 0)