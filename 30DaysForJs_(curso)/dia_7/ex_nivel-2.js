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

// Continuar apartir da questao 7....