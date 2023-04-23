export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    exibirInfo() {
        return `${this.#nome}, ${this.#email}`
    }
    //separando nome e sobrenone
    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error ('formato incorreto')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }
    // atualizando o get 
    //retorna nome
    get nome() {
        return this.#nome
    }
    //retorna sobtrenome
    get sobrenome() {
        return this.#sobrenome
    }
    //juntado nome
    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }
}
