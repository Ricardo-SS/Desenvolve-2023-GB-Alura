// boolean

const usuarioLogado = true;
const contaPaga = false;

// dados que nao sao boolean mas que podem ser interpretados como sendo

// 0 = false
// 1 = true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null === vazio ou nada
// underfined === indefinido

let numero = 2;
let texto = "Alura";
let numeroNull = null;

// verifica o tipo da variavel
console.log(typeof numero);         // tipo number
console.log(typeof texto);          // tipo string
console.log(typeof numeroNull);     // tipo object
