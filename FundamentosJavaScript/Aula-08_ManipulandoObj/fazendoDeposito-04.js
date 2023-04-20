// armazenando dados do cliente em um objetoJS

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ["88-9-8888-7777", "88-9-6666-5555"],
    dependentes: [{
        nome: "sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    },
    {
        nome: 'Ana Silva',
        parentesco: 'filha',
        dataNasc: '02/01/2014'
    }],
    saldo: 100,
    depositar:  function(valor) {
        this.saldo += valor;
    }
};

console.log(`Salto anterior: ${cliente.saldo}`);
//chamando a função depositar e passando um valor para ela
cliente.depositar(30);

//consultando saldo do cliente apos o deposito
console.log(`Salto atual: ${cliente.saldo}`);
