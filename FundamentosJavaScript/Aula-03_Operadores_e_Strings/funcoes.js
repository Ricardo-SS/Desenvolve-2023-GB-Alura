const numeroUm = 1;
const numeroDois = 6;
//funcção sem parametro
function soma (){
    return numeroUm + numeroDois;
}

console.log(soma());

// função com parametro
function multiplicaNumero (primeiro, segundo){
    return primeiro * segundo;
}

//chamdando as funções e passando 2 e 4 como parametros
console.log(multiplicaNumero(2, 4));

//usando outros numeros
console.log(multiplicaNumero(8, 8));
console.log(multiplicaNumero(100, 5));


// usando uma função dentro de outra função multiplicando o valor retornado por 2
console.log(multiplicaNumero(soma(), 2));

// ordens dos parametros
function nomeIdade (nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}.`;
}

console.log(nomeIdade("Ricardo", 28));

// função com parametros pre definidos
// função com parametro
function multiplicaComParametro (primeiro = 1, segundo = 1){
    return primeiro * segundo;
}

// passando apenas um parametro
console.log(multiplicaComParametro(8));