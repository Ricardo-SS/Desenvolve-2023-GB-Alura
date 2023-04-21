function cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf=cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const ricardo = new clientePoupanca ("Ricardo", "987654321", "ricardo@email.com", 100, 200);

// console.log(ricardo)
console.table(ricardo)

clientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor;
}

ricardo.depositarPoup(50);
console.table(ricardo)
