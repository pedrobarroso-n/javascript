/*
let quantIds = parseInt(prompt('Quantos Ids vai querer')), tamanIds = parseInt(prompt('Qual o tamanho de seus Ids'))
function userIdGeneratorByUser(){
    const ID = new Array, codes = new Array
    const caracteres = ['b',1,9,'A','c','D',5,3,'C',8,'d',7,'f',2,'B',6,'F',4,'a',0,'e','E']
    do{
        quantIds % 2 == 0 ? caracteres.reverse() : caracteres.sort()
        for (tamanIds; tamanIds > 0; tamanIds--){
            ID.push(caracteres[Math.floor(Math.random() * 22)])
        } 
        codes.push(ID.join('')) 
        quantIds--
    } while (quantIds > 0)
    return alert(codes.join('\n'))
}
userIdGeneratorByUser()   // funciona mas os Ids se repetem
*/

function rgbColorGenerator(){
    const rgb = new Array
    for (let init = 0; init < 10; init++){
        init == 3 || init == 7 ? rgb.push(',') : rgb.push(Math.floor(Math.random() * 10))
    }
    return console.log(`rgb(${rgb.join('')})`)
}
rgbColorGenerator()

function arrayOfHexaColors(){
    const hexa = new Array
    const caracteres = ['b',1,9,'A','c','D',5,3,'C',8,'d',7,'f',2,'B',6,'F',4,'a',0,'e','E']
    for (let init = 0; init < 7; init++){
        init == 0 ? hexa.push('#') : hexa.push(caracteres[Math.floor(Math.random() * 22)])
    }
    return console.log(hexa.join(''))
}
arrayOfHexaColors()

// Pulei 5,6 ---

function gereteColors(type, quant){
    const colors = new Array

    switch (type){
        case 'hexa':
            const hexaCode = []
            const caracteres = [6,'a',8,'c','b',4,7,3,'f',5,2,'d',9,1,'e',0]
            while (quant > 0){ 
                hexaCode.length >= 6 ? hexaCode.splice(0) : hexaCode // nao ocorre nada
                for (let init = 1; init <= 7; init++){
                    init == 1 ? hexaCode.push('#') : hexaCode.push(caracteres[Math.floor(Math.random() * 16)])
                }
                colors.push(hexaCode.join(''))
                quant--
            }
            break

        case 'rgb':
            let rgbCode = 'rgb('
            while (quant > 0){
                rgbCode.length > 4 ? rgbCode = rgbCode.slice(0, 4) : rgbCode // nada ocorre
                for (let init = 0; init < 3; init++){
                    rgbCode += Math.floor(Math.random() * 257)
                    rgbCode += ','
                }
                rgbCode = rgbCode.slice(0, rgbCode.length-1) // retira a ultima virgula (acidental)
                rgbCode += ')'
                colors.push(rgbCode)
                quant--
            }
            break
    }
    return colors
}
console.log(gereteColors('rgb', 2))

function shuffleArray(array){return array.sort()}
console.log(shuffleArray([1,10,-9,3,99,102]))

const factorial = function(num){
    for (let fat = num-1; fat > 0; fat--){
        num *= fat
    }
    return console.log(num)
}
factorial(5)

const isEmply = function(value){
    value === NaN || value === undefined || value.length < 1 
    ? console.log('Esta vazio') 
    : console.log('Não esta vazio')
}
isEmply()

const sum = function(...args){
    let sum = 0
    for (let init = 0; init < args.length; init++){sum += args[init]}
    return console.log(sum)
}
sum(1,2,3,4,5,6,7,8,9)

const sumOfArrayItems = (arr) =>{
    let sum = 0
    for (let index = 0; index < arr.length; index++){
        sum += arr[index]
        if (typeof arr[index] !== "number"){
            return console.log('Algum dos valores encontrados em seu array não é um numero, pf verifique-os')
        }
    }
    return console.log(sum)
}
sumOfArrayItems([1,2,0,4])

const average = (arr) =>{
    let media = 0
    for (let indice = 0; indice < arr.length; indice++){
        media += arr[indice]
        if (typeof arr[indice] !== "number"){
            return console.log('Algum dos valores encontrados em seu array não é um numero, pf verifique-os')
        }
    }
    return console.log(media/arr.length)
}
average([6,4,3,7])

const modifyArray = function(arr){
    if (arr.length < 5){
        return 'Not Found'
    } else{
        arr[4] = arr[4].toLocaleUpperCase()
        return arr
    }
}
console.log(modifyArray(['Samsung','Apple','Xiaome','Asus','Realme']))
console.log(modifyArray(['Nokia','Lg','Lenovo','Motorola']))

function isPrime(num){
    if (num == 2 || num == 3 || num == 5 || num == 7 || num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0){
        return console.log('Is Prime')
    } return console.log('Not is Prime')
}
isPrime(11)

// Pulei 16/17

const isValidVariable = function(name_var){
    if (name_var[0] == '$' || name_var[0] == '_' || /^\D/.test(name_var)){
        return console.log('Value Variable')
    } return console.log('Invalue Variable')
}
isValidVariable('pulso')
isValidVariable('_name')
isValidVariable('10conto')

function sevenrandomNumbers(){
    const array = new Array
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    for (let quant = 0; quant < 7; quant++){
        array[quant] = numbers.splice(Math.floor(Math.random() * 10), 1).join()
        if (array[quant] === ''){
            array.splice(quant, 1)
            quant--
        } else{continue}
    }
    return console.log(array)
}
sevenrandomNumbers()

const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
function reverseCountries(){
    let reverse = []
    for (let init = countries.length-1; init >= 0; init--){reverse.push(countries[init])}
    return console.log(reverse)
}
reverseCountries()