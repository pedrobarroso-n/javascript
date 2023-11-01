let array = [], tamanho = Math.floor(Math.random(3, 15) + 15), caracteres = [0,'a',1,'b',2,'c',3,'d',4,'e',5,'f',6,'g',7,'h',8,'i',9,'j']
for (tamanho; tamanho > 0; tamanho--){
    array.push(caracteres[Math.floor(Math.random() *20)])
}
console.log(array.join(''))

let hexadecimal = ['#'], valores = [7,0,'a',1,'b',2,9,'c',3,'d',4,'e',5,8,'f',6]
for (let tamanho = 6; tamanho > 0; tamanho--){
    hexadecimal.push(valores[Math.floor(Math.random() *16)])
}
console.log(hexadecimal.join(''))

let rgb = []
for (let tamanho = 3; tamanho > 0; tamanho--){
    rgb.push(Math.floor(Math.random() * 256))
}
console.log(`rgb(${rgb.join(',')})`)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log(countries)

const comprimento = []
for (const tamanho in countries){
    comprimento.push(countries[tamanho].length)
}
console.log(comprimento)

let principal = [], secundarios = []
for(const tamanho in countries){
    secundarios = [countries[tamanho], countries[tamanho].slice(0,3).toLocaleUpperCase(), countries[tamanho].length]
    principal.push(secundarios)
    console.log(principal)
} 

let haveLand = []
for (const have in countries){
    if (countries[have].includes('land') === true){
        haveLand.push(countries[have])
    }
}
console.log(haveLand)

let haveIa = []
for (const have in countries){
    if (countries[have].match(/ia$/)){  // ja retorna true por padrao por isso não precisa comparar
        haveIa.push(countries[have])
    }
}
haveIa.length != 0 ? console.log(haveIa) : console.log('Nenhum desses países terminam com ia')

let maior = countries[0];
for (let tamanho = 1; tamanho < countries.length; tamanho++){
    if (maior.length < countries[tamanho].length){
        maior = countries[tamanho]
    }
}
console.log(maior)

let fiveLength = []
for (const isfive in countries){
    if (countries[isfive].length === 5){
        fiveLength.push(countries[isfive])
    }
}
console.log(fiveLength)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let maior2 = webTechs[0]
for (let index = 1; index < webTechs.length; index++){
    if(maior2.length < webTechs[index].length){
        maior2 = webTechs[index]
    }
}
console.log(maior2)

let um = [], dois = []
for (const tamanho in webTechs){
    dois.push(webTechs[tamanho], webTechs[tamanho].length)
    um.push(dois)
    dois = []
}
console.log(um)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let sigla = ''
for(const percorre in mernStack){
    sigla+= mernStack[percorre].slice(0,1)
}
console.log(sigla)

let i = 0;
do{
    console.log(webTechs[i])
    i++
} while (i < webTechs.length);

let fruits = ['banana', 'orange', 'mango', 'lemon']
let o = fruits.length-1
while (o >= 0){
    fruits.push(fruits[o])
    o--
}
fruits.splice(0,4)
console.log(fruits)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const percorre in fullStack[0]){console.log(fullStack[0][percorre])}
for (const percorre in fullStack[1]){console.log(fullStack[1][percorre])}
