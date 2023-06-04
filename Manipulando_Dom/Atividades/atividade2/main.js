const salvaDados = document.querySelector("#calcular");

salvaDados.addEventListener("click", enviado);

function enviado(){
    document.querySelector('.resultado').innerText="Dados enviados"
    console.log("dados enviados com sucesso")
}
