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

const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)
console.log(andre)
andre.exibirSaldo()