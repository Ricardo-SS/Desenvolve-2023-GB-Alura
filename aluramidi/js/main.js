function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);


    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } 
    else {
        console.log('elemento não existe');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //montando string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //console.log(contador);
    tecla.onkeydown = function (evento) {

        //console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
