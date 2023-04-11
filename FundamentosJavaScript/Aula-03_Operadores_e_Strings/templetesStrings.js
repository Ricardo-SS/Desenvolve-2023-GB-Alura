const nome = "Joao";
const idade = 17;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

//usando operador ternario no lugar do if dentro do template
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)