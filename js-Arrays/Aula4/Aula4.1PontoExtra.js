// Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas. Temos uma array, uma lista de números, que são todas as notas que esse aluno tem, do ano, e temos que adicionar um ponto extra para cada item desse array.

const notas = [10, 6.5, 8, 7.5];

// usando operador ternario substituindo o if
const notaAtualizadas = notas.map( nota => nota == 10 ? nota: ++nota);

console.log(notaAtualizadas);