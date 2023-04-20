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

let relatorio = "";

for ( let info in cliente ){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += `
            ${info} - ${cliente[info]}`
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    } else {
        console.log(`Oferta de emprestimo para ${obj.nome}`)
    }
}

oferecerSeguro(cliente);
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
