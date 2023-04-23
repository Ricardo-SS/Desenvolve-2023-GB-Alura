import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo)
    }

    exibirInfo() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCurso (nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin("Ricardo", "r@r.com", "2021-01-01");
// //console.log(novoAdmin);
// console.log(novoAdmin.exibirInfo());
// console.log(novoAdmin.criarCurso("Js", 20));
