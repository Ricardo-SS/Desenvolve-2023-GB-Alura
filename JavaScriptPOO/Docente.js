// OBS. toda classe segue o conceito de strict mode

import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante (estudante, curso){
        return `estudante ${estudante} aprovado(a) no curso ${curso}` 
    }
}

// const novoDocente = new Docente("Mariana", "m@m.com", "2020-01-01")
// console.log(novoDocente)
// console.log(novoDocente.exibirInfo())
// console.log(novoDocente.aprovaEstudante("Juliana", "Js"))
