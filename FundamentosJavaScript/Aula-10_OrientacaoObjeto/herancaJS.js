class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}
//segunda parte do codigo
class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    // comportamento é um funcao
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}
//terceira parte
const andre = new ClientePoupanca("Andre", "a@mail.com", "12312312312", 100, 200)
//quarta parte
andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)