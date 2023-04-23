class User {
    #nome
    #email
    #cpf
     constructor(nome, email, cpf) {
      this.#nome = nome
      this.#email = email
      this.#cpf = cpf
    }
   // se tira # do nome dentro do get vai dar um overflow
    get nome() {
      return this.#nome
    }
   }

   const novoUser = new User('Carol', 'c@c.com', '12312312312')
console.log(novoUser.nome)