// primeira questao
const evenNumbers = [2,4,6,8,10,12,14,16,18,20];
evenNumbers.forEach((odd) => console.log(odd - 1))   // percorre o array
console.log(evenNumbers.map((newEven) => newEven + 2))  // percorre e atualiza o array
console.log(evenNumbers.filter((found) => found < 16))  // encontrar valores segundo a condição posta
console.log(evenNumbers.reduce((acc, cur) => acc + cur ,0))  // ????

// segunda questao
const pontence = (num) => { return num ** 2 }
const squareRoot = (callback, num) => { return Math.sqrt(callback(num)) }  // chamando uma função em outra função
console.log(squareRoot(pontence, 3))

// terceira questao
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach( (itens) => console.log(itens) )

// quarta questao
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach( (itens) => console.log(itens) )

// quinta questao
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach( (itens) => console.log(itens) )

// sexta questao
const newCountries = countries.map( (itens) => itens.toUpperCase() )
console.log(newCountries)

// setima questao
const lengthCoutries = countries.map( (itens) => console.log(itens.length) )

// oitava questao
const squareNumbers = numbers.map( (num) => console.log(num ** 2))

// nona questao
const newNames = names.map( (itens) => console.log(itens.toLocaleUpperCase()) )

// decima questao
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
products.map( (itens) =>  console.log(itens) )

// decima primeira questao
console.log(countries.filter((itens) => itens.toLocaleLowerCase().includes('land')))

// decima segunda questao
console.log(countries.filter((itens) => itens.length === 6))

// decima terceira questao
console.log(countries.filter((itens) => itens.length >= 6))

// decima quarta questao
console.log(countries.filter(itens => itens.toLocaleLowerCase().startsWith('E')))

// decima quinta questao
console.log(products.filter(itens => itens.price != '' && itens.price != ' '))

// decima sexta questao
const array = [true, 0.46, '', "Wow", undefined, NaN, function none(){}]
console.log(array.filter(itens => typeof(itens) === "string"))

// decima setima questao
console.log(numbers.reduce((acc, cur) => acc + cur , 0))

// decima oitava questao
console.log(countries.reduce((acc , cur) => (acc + ', ') + cur).concat(' are north European countries'))
 
// decima nona questao
console.log(names.every(name => typeof(name) === "string"))  // retorna um bollean [true == todos atendem a condiçao | false == nenhum atende a condiçao]
console.log(array.some(strings => typeof(strings) === "string"))  // retorna um bollena [true == se pelo menos um valor atender a condiçao | false == se nenhum valor atender a condiçao]

// vigesima questao
console.log(names.some(name => name.length > names.length))

// vigesima primeira questao
console.log(countries.every(country => country.toLocaleLowerCase().includes('land')))

// vigesima segunda questao
console.log(numbers.find(number => number > 7))  // mostra o primeiro valor que atende a condiçao 
console.log(numbers.findIndex(number => number > 7))  // mostra o indice do primeiro valor que atende a condiçao

// vigesima terceira questao
console.log(countries.find(country => country.length === 6))

// vigesima quarta questao
console.log(countries.findIndex(country => country.length === 6))

// vigesima quinta questao
console.log(countries.findIndex(country => country === 'Norway'))

// vigesima sexta questao
console.log(countries.findIndex(country => country === 'Russia'))