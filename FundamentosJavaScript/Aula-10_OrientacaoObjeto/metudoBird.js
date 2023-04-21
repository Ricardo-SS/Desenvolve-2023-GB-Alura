const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
}

// Vamos ver o que acontece se tentarmos executar essa função a partir de outro contexto:
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

// Ressolvemos este problema com bind():
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia
