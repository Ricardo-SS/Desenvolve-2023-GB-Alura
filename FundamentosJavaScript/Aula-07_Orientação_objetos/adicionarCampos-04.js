//armazenando dados do cliente em um objetoJS
const clienteObj = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
};

console.log(clienteObj);

//adicionando novo campo ao objetoJS
clienteObj.fone = "88-9999-8888";
console.log(clienteObj);

//alterando dados do cliente (ex. fone)
clienteObj.fone = "88-9-8888-7777";

console.log(clienteObj);