//armazenando dados do cliente em um objetoJS
// colocando um array dentro de um objeto

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones:["88-9-8888-7777", "88-9-6666-5555"]
};

cliente.fones.forEach(fone => console.log(fone));

