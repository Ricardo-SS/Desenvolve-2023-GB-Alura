// const dataEHora = new Date();
// const dia = dataEHora.getDate();
// console.log(dia);

var dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
// Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
// string

var dataEHora = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora)
// 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora)
// object


//  outros metodos
console.log(dataEHora.getSeconds())
console.log(dataEHora.getMinutes())
console.log(dataEHora.getHours())
console.log(dataEHora.getDay())
console.log(dataEHora.getMonth())
console.log(dataEHora.getFullYear())