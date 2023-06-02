const nomes = ["joao", "maria", "pedro", "jose"];

// o forEach precisa de uma funçao, essa funçao pode esta dentro ou fora do forEach.
nomes.forEach(exibeNomes);

function exibeNomes (nome){
    console.log(nome)
}