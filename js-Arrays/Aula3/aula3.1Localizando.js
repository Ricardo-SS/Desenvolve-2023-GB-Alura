// pesquisando em lista de 2D

const alunos = ["joao", "maria", "pedro", "jose"];

const media = [10, 6.5, 8, 9];

let listaAlunosMedias = [alunos, media];

const exibeNomeNota = (nomeAluno) => {
    if (listaAlunosMedias[0].includes(nomeAluno)) // esta buscando o nome que passamos como parametro
    {
        let indice = listaAlunosMedias[0].indexOf(nomeAluno)
        return listaAlunosMedias[0][indice] + `, sua media é ` + listaAlunosMedias[1][indice]
    } else {
        return `Aluno não encontrado.`
    }
} 

console.log(`${exibeNomeNota("maria")}`);

// o includes sepre retorna true ou false
// o indexOf retorna o indice do elemento