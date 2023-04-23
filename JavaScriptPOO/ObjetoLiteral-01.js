const user = {
    nome: "Ricardo",
    email: "ricardo@email.com",
    nacimento: "2020/01/01",
    role: "admin",
    ativo: true,
    exibirInfo: function (){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Mariana",
    email: "mariana@email.com",
    role: "admin",
    criarCurso(){
        console.log("curso criado")
    }
}
                 //vaierdar //vai passar
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();