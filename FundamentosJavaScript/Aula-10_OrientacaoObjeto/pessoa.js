// usando exemplo do material de apoio

// const pessoa = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeNome: function(){
//       console.log(`${pessoa.nome}`)
//     }
//    }
   
//    pessoa.imprimeNome() //Ana

// uma maneira melhor de fazer o codigo anterior
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
        console.log(`${this.nome}`)
        // melhorando a exibicao
        console.log(`nome: ${this.nome}, email ${this.email}`)
    }
}
   
pessoa.imprimeNome() //Ana