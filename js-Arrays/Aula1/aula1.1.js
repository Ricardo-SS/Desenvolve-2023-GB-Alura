//Adicionando nota no array
const notas = [10, 6.5, 8]
notas.push(9); //adiciona um elemento

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(notas);
console.log(`A media é ${media}`); // usando template string
console.log("elementos", notas.length); // sem template string