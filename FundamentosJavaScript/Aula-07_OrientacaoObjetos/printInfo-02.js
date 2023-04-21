//armazenando dados do cliente em um objetoJS
const clienteObj = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
};

//apresentando cliente
console.log(`Meu nome é ${clienteObj.nome} e tenho ${clienteObj.idade} anos.`);

//dados sensiveis do cliente
console.log(`cpf: ${clienteObj.cpf.substring(0,3)}******`)  // usando substrings para limitar o que é exibido.