function fullName(){    // função sem parametro (se mantem inalterada)
    console.log('Pedro B.Neto')
}
fullName()

function Fullname(firstName, lastName){    // função com parametro (pode ser alterada)
    console.log(`${firstName} ${lastName}`)
}
Fullname('Pedro','B.Neto')

function addnumber(n1, n2){    
    return n1 + n2      // o return execulta o calculo e o retorna quando chama a função, mas nao o imprime
}
console.log(addnumber(23, 98))

function areaOfRectagle(comprimento, largura){return comprimento * largura}
console.log(areaOfRectagle(6, 9))

function perimetroOfRetangle(comprimento, largura){return 2 * (comprimento + largura)}
console.log(perimetroOfRetangle(7, 4))

function volumeOfRectPrism(comprimento, largura, altura){return comprimento * largura * altura}
console.log(volumeOfRectPrism(5, 8, 2))

function areaOfCircle(raio){return Math.PI * Math.pow(raio,2)}
console.log(areaOfCircle(3))

function circumOfCircle(raio){return 2 * Math.PI * raio}
console.log(circumOfCircle(5))

function densidade(massa, volume){return massa / volume}
console.log(densidade(134, 12))

function speed(distancia, tempo){return `${distancia / tempo} Km/h`}
console.log(speed(245, 3))

function peso(massa, gravidade = 9.9){return massa * gravidade} // fazendo oq eu fiz na gravidade e possivel dar a ela um valor padrao caso q ponham um no lugar
console.log(peso(34))

function convertCeliusToFahrenheit(celsius){return (celsius * 9/5) + 32 + ' F°'}
console.log(convertCeliusToFahrenheit(31))

function IMC(peso, altura){
    let imc = peso / Math.pow(altura, 2)
    if (imc < 18.5){return 'Abaixo do peso'}
    else if (imc >= 18.5 && imc < 25){return 'Peso normal'}
    else if (imc >= 25 && imc < 30){return 'Excesso de peso'}
    else if (imc >= 30){return 'Obeso'}
}
console.log(IMC(64.2, 1.74))

function checkSeason(mes){
    if (mes == 'Outubro' || mes == 'Novembro' || mes == 'Dezembro'){return 'Inverno'}
    else if(mes == 'Janeiro' || mes == 'Fevereiro' || mes == 'Março'){return 'Verão'}
    else if(mes == 'Abril' || mes == 'Maio' || mes == 'Junho'){return 'Outono'}
    else if(mes == 'Julho' || mes == 'Agosto' || mes == 'Setembro'){return 'Primavera'}
}
console.log(checkSeason('Dezembro'))

function findMax(...args){return Math.max(...args)}   // suporta multiplos valores sem especificar antes
console.log(findMax(1, 9.9, -50, 87))
