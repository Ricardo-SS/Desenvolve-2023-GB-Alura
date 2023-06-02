//calcular a média entre as seguintes notas usando esse foreach que o Léo vai dizer para nós o que é, do que se trata, mas antes disso vou criar um novo arquivo, vou chamar de média foreach.

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

//forEach = para cada.
notas.forEach(nota => {
    somaNotas += nota;
})

let media = (somaNotas/notas.length);
console.log(`À media é ${media}`);