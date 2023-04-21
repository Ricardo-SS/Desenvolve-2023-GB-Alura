//armazenando dados do cliente em um objetoJS
const clienteObj = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(clienteObj[chaves[0]])

// usando for com a funçao forEach
chaves.forEach(info=>console.log(clienteObj[info]));
console.log(clienteObj.nome)