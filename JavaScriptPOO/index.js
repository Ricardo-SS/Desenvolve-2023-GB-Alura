import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Ricardo", "r@r.com", "2021-01-01");
console.log(novoUser.exibirInfo())

// novoUser.#nome = "Marcia"
// console.log(novoUser.nome)

const novoAdmin = new Admin("Ricardo", "r@email.com", "2020-01-01");
console.log(novoAdmin.nome);
// novoAdmin.nome = "";
// console.log(novoAdmin.nome)

const novoDocente = new Docente("Maria", "r@email.com", "2022-01-01");
console.log(novoDocente.exibirInfo());
