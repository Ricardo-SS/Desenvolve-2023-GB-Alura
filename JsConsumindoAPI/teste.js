var requisicao = fetch("https://localhost:5000/")
.then(resposta => resposta.json())
.then(respostaConvertida => console.log(respostaConvertida));