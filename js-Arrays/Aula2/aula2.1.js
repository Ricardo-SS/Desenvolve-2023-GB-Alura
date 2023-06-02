const listaChamadas = ["joao", "maria", "pedro", "jose"];

//Removendo dois alunos e adicionando um novo no lugar, o splice aceita 3 paramentros splice(incio, remove quantos?, adciona quem ou o que?)
listaChamadas.splice(1,2, "Rodrigo");

console.log(`Lista de chamada ${listaChamadas}`);