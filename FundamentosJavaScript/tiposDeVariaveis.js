// tipo var - não precisa ser inicializada antes de usar

// declarando variáveis
var comprimento = 5;
var altura = 7;

// calculando árae de um retangulo;
var area = comprimento * altura;

// imprimeindo no console
console.log("Area = " + area);

// var area (poderia se inicializada em qualquer parte do código)

// tipo let - precisa ser inicializada antes de usar
// delcarando variaváveis
let comprimento1 = 6;
let largura1 = 7;
let area1;

// calculando área
area1 = comprimento1 * largura1;

console.log("Area1 = " + area1);

// usando condições
let forma = "retangulo";

if(forma === "retangulo") {
    // calcula area retângulo
    area1 = comprimento1 * largura1;
} else {
    // calcula area de um triangulo
    area1 = (comprimento1 * largura1) / 2;
}

console.log("Area na condição = " + area1)