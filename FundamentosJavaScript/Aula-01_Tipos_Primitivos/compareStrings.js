// comparando duas cidades
const cidade = "fortaleza";
const input = "Fortaleza";

// o valor será falso pois as estrings tem uma letra diferente
console.log(cidade === input);

// resolvendo problema de comparação
const inputMinusculo = input.toLowerCase();

// o valor será verdadadeiro pois usamos uma função para deixar tudo minusculo
console.log(cidade === inputMinusculo);

// contando caracteres de uma estring
console.log(cidade.length);