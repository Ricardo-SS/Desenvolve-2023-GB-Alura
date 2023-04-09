const primeiroNumero = 1;
const segundoNumero = 3;

const soma = primeiroNumero + segundoNumero;
const multiplica = primeiroNumero * segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const divisao = primeiroNumero / segundoNumero;

const texto = "teste";

console.log("soma", soma);
console.log("multiplica", multiplica);
console.log("subtracao", subtracao);
console.log("divisao", divisao.toFixed(2));

console.log("textoNumero", texto * primeiroNumero);

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return salarioHora;
}

const hora = ganhoPorHora(1900, 330);

console.log("SalarioHora", hora.toFixed(2)); // fixando casa decimais

console.log("SalarioHora", Math.round(hora)); // usando biblioteca Math, pra arredondar.