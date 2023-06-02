//manipulando elementod de um array

const arrayNums = [1, 2, 3, 4]

//Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)

// outra forma de fazer usando uma arrow function 
const arraySomada2 = arrayNums.map(num => num * 10)

console.log(arraySomada2)

//note que o resultado foi o mesmo