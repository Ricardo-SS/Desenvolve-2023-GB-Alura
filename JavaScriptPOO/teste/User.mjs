export default class User {
    #nome
    #sobrenome
    // restante das propriedades
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        // restante das propriedades
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }
    exibirInfo(){
        return `${this.#nome}, ${this.#email}`
    }
}


const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'