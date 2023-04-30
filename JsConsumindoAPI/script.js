async function buscaEdencos(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP inexistente');
        }
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida)
        return consultaCepConvertida;
    } catch (erro){
        mensagemErro.innerHTML = `<p style="color: red;">CEP inválido. tente novamente!</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEdencos(cep.value));


