var consultaCep = fetch('https://viacep.com.br/ws/62989000/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro){
        throw Error('Esse CEP não existe!')
    } else 
        console.log(r)
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log("Requisição concluida"));

console.log(consultaCep);