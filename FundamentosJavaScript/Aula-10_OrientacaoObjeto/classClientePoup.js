// sempre dar o nume da class com letras MAIUSCULAS. ex, Cliente
class Cliente {
    constructor (nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo (){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        // o super tras as propriendade que queremos herdar
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const andre = new ClientePoupanca("Andre", "12312312312", "andre@email.com", 100, 200);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(50);

console.log(andre);