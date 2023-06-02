
const nomes = ["joao", "maria", "pedro", "jose"];

const notas = [10, 4.5, 8, 7.5];
// o filter sempre retorna true false
// o _ está substituindo o aluno que nao esta sendo usado, mas o aparametro é obrigatorio.
const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`);
