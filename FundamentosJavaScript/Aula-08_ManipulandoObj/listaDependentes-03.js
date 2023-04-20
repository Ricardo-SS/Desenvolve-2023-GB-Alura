// armazenando dados do cliente em um objetoJS
// transfomamos o nosso objeto interno em um array
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones:["88-9-8888-7777", "88-9-6666-5555"],
    dependentes: [{
        nome: "sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
};

// adicionando multiplos dependentes
cliente.dependentes.push({
    nome: "Ana Silva",
    parentesco: "filha",
    dataNasc: "02/01/2014"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "02/01/2014");

console.log(filhaMaisNova[0].nome);
