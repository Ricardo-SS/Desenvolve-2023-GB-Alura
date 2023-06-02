//Removendo nota no array
const notas = [10, 6.5, 8, 9]
notas.pop(); //remove o ultimo elemento

let media = (notas[0] + notas[1] + notas[2])/notas.length;

console.log(notas);
console.log("media", media);
console.log("elementos", notas.length);