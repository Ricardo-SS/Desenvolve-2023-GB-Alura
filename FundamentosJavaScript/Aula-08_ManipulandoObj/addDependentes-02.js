// armazenando dados do cliente em um objetoJS
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones:["88-9-8888-7777", "88-9-6666-5555"]
};

// adicionando dependente em forma de objeto
cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

// modificando nome do objeto dentro do objeto
cliente.dependentes.nome = "sara silva"

console.log(cliente);

