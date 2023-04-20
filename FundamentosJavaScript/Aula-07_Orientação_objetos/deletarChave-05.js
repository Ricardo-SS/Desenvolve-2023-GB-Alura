//criando um objeto de personagem
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
};

//lendo valores
console.log(objPersonagem);

// removendo propriedade aliado
delete objPersonagem.aliado
console.log(objPersonagem);

//verificando se a propriedade ainda existe
delete objPersonagem.aliado
console.log(objPersonagem.aliado) //undefined

// removendo usando a notaçao de cochetes
delete objPersonagem["status"]
console.log(objPersonagem.status) //undefined

// verificando como funciona a funçao delete
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

//retorna sempre um boleano
console.log(delProp) //true
console.log(delPropInexistente) //true