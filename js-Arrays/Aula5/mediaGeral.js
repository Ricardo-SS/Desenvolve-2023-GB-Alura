
const salaJS = [10, 6.5, 8, 7.5, 8 , 9, 8, 3];

const salaPy = [9, 2.5, 8, 7.8, 6 , 9, 4, 7];

const salaJV = [4, 5.5, 9, 9.5, 2 , 9, 10, 9];

// o reduce precisa de 2 paramentros, um acumulador e o atual elemento que esta sendo lido.
function mediaSala(notasSala){
    const somaNotas = notasSala.reduce((acumulador, atual) => atual + acumulador, 0);
    return somaNotas/notasSala.length;
}

console.log(`Media da sala de JS ${mediaSala(salaJS)}`)
console.log(`Media da sala de Py ${mediaSala(salaPy)}`)
console.log(`Media da sala de JV ${mediaSala(salaJV)}`)

//calculando media de um array, melhor q na aula anteriores.
const notas = [10, 6.5, 8, 7.5]

const media = notas.reduce((acumulador, atual) => atual + acumulador, 0) / notas.length;

console.log(media);