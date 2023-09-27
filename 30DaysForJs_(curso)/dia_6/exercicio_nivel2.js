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
    console.log(secundarios)
}     // por os arrays menores em um array principal

//  ...continuar apartir do 7º...