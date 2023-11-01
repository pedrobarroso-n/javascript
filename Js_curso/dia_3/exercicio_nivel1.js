let firstName = 'Pedro', lastName = 'Neto', country = 'Brasil', city = 'Pedro II', age = 18, isMarried = false, year = 2023
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)

console.log(10 == 10)   // toda comparação retorna true ou false

console.log(9.8 == 10)

console.log('18' == 18, false == 0, true == 1)  // operador normal de comparação (compara o valor)
console.log('18' === 18, false === 0, true === 1)   // operador melhorado de comparação, (compara o tipo e o valor)

/*
true
true
true
true
true
false
false
false
true
false
*/

/*
true
false
true
true
false
true
true
false
true
true
false
 */

let data = new Date()   // varival do tipo data (tem que ter uma para pode usar os itens abaixo)
console.log(data.getFullYear()) // pega o ano 
console.log(data.getMonth())    // pega o mes [0-11]
console.log(data.getDate()) // pega o dia [1-31]
console.log(data.getDay()) // pega o dia da semana [0-6]
console.log(data.getHours())    // pega a hora
console.log(data.getMinutes())  // pega os minutos
console.log(data.getTime()) // quantos segundos se passaram de 1970 ate hoje