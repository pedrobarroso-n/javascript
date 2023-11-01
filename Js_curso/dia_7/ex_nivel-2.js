// ?.....

const solveQuadEquation = function(a = 0, b = 0, c = 0){    // função anonima é locada a uma variavel
    let raizes = []
    if (a === 0){
        raizes.push(0)
        return raizes
    }
    else{
        raizes.push((-b + Math.sqrt(b**2 - 4*a*c)) / 2*a)
        raizes.push((-b - Math.sqrt(b**2 - 4*a*c)) / 2*a)
        return raizes
    }
}
console.log(solveQuadEquation(1, -1, -2))

const printArray = function(arr){
    for(const percorrer in arr){
        console.log(arr[percorrer])}
    }
printArray([1,2,3,4,5,6])

const showDataTime = () =>{    // função de seta funciona parecido com a função anonima de uma forma mais simplificada
    let data = new Date()
    console.log(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)
}
showDataTime()

const swapvalues = (x,y) =>{
    let x2 = x
    x = y
    y = x2
    console.log(x, y)
}
swapvalues(2,5)

const reverseArray = (arr) =>{
    let newArr = []
    for (const percorrer in arr){
        newArr.unshift(arr[percorrer])
    }
    return newArr
}
console.log(reverseArray([2023,2022,2021,2020]))

function capitalizeArray(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLocaleUpperCase()
    }
    return arr
}
console.log(capitalizeArray(['pedro','anna','leonardo']))

const addItem = (arr, item) =>{
    arr.push(item)
    return arr
}
console.log(addItem([1,2,4,6], 8))

const removedItem = (arr, item) =>{
    arr.splice(arr.indexOf(item), 1)
    return arr
}
console.log(removedItem([1,3,5,7], 3))

const sumOfNumbers = (init, finish) =>{
    let arr = new Array
    for (init; init < finish-1; init++){
        arr.push(init+1)
    }
    return arr
}
console.log(sumOfNumbers(23, 35))

const sumOfOdds = function(init, finish){
    const isOdd = []
    do{
        if (init % 2 == 1){isOdd.push(init)}
        init++
    } while (init < finish)
    return isOdd
}
console.log(sumOfOdds(0, 12))

const sumOfEvens = function(init, finish){
    const isEven = []
    do{
        if (init % 2 == 0){isEven.push(init)}
        init++
    } while (init < finish)
    return isEven
}
console.log(sumOfEvens(0, 12))

const EvensAdnOdds = function(init, finish){
    let countEven = 0, countOdd = 0
    do{
        init % 2 !== 0 ? countOdd++ : countEven++
        init++
    } while (init <= finish)
    return `O numero de pares é ${countEven}\nO numero de impares é ${countOdd}`
}
console.log(EvensAdnOdds(4,82))

function sum(...args){
    let count = 0
    for(const percorrer in args){count += args[percorrer]}
    return count
}
console.log(sum(7,2,19))

function randomUserIp(){
    let ip = new Array
    for (let i = 0; i < 7; i++){
        ip.push(Math.floor(Math.random() * 10))
    }
    console.log(ip.join(''))
}
randomUserIp()

function randomMacAddress(){
    const address = new Array
    const caracteres = [9,'A',2,8,'F',1,'B',4,'D',3,'E',7,'C',0,5,6]
    for (let i = 1; i < 18; i++){
        i % 3 == 0 
            ? address.push(':') 
            : address.push(caracteres[Math.floor(Math.random() * 16)])
    }
    console.log(address.join(''))
}
randomMacAddress()

function randomHexaNumberGenerator(){
    const hexaCode = new Array
    const caracteres = ['b',8,0,'f','c',1,'e',6,2,'a',4,5,7,'d',3,9]
    for (let i = 0; i < 7; i++){
        i != 0
            ? hexaCode.push(caracteres[Math.floor(Math.random() * 16)])
            : hexaCode.push('#')
    }
    return hexaCode.join('')
}
console.log(randomHexaNumberGenerator())

function userIdGenerator(){
    const ID = new Array
    const caracteres = ['b',1,9,'A','c','D',5,3,'C',8,'d',7,'f',2,'B',6,'F',4,'a',0,'e','E']
    for (let i = 1; i <= 7; i++){
        ID.push(caracteres[Math.floor(Math.random() * 22)])
    }
    return ID.join('')
}
console.log(userIdGenerator())