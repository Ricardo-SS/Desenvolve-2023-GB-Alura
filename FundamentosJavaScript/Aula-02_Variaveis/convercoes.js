// tipo de dado
// booleanos

// conversão implicita

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString)    // verifica se sao iguais em valor e tipo
console.log(numero == numeroString)     // verifica se sao iguais em valor

console.log(numero + numeroString)      // tranfoma o tipo numero em string e concatena

// conversão explicito
// Namber()
// String()
console.log(numero + Number(numeroString));   // converte a estring em número
