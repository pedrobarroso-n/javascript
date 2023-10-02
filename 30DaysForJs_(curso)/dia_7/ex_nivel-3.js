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

// Pulei---
