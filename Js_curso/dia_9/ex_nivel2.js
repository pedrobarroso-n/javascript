// primeira questao
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
console.log(products
    .filter(clear => typeof(clear.price) === "number")
    .map(nonames => nonames.price)
    .reduce((acc, cur) => acc + cur)
)

// segunda questao
// ?-----

// terceira questao
const countries = [
    'United States',
    'Canada',
    'Australia',
    'United Kingdom',
    'Japan',
    'Brazil',
    'South Korea',
    'Germany',
    'France',
    'Italy',
    'Mexico',
    'India',
    'Spain',
    'Russia',
    'China',
    'Argentina',
    'South Africa',
    'Sweden',
    'Netherlands',
    'Switzerland'
];
console.log(countries.filter(categorizeCoutries => categorizeCoutries.endsWith('ia')))

// quarta questao
let array = countries.map(letterCount => letterCount.slice(0, 1))
const newArray = []

let letter, allLetters = 0, counting = 0

while (allLetters < array.length) {
    letter = array[allLetters]
    for (let i = 0; i < array.length; i++){
        letter === array[i] ? counting++ : counting += 0
    }
    array = array.filter(norepet => norepet !== letter).map(element => element)
    newArray.push({ letra: letter, quantidade: counting })
    counting = 0
    allLetters++
}
console.log(newArray)

// quinta questao
function getFirstTenCountries(){
    let array = countries
        .map(element => element)
        .splice(0, 10)
    return array
}
console.log(getFirstTenCountries())

// sexta questao
function getLastTenCountries(){
    const array = countries
        .map(element => element)
        .splice((countries.length-10), (countries.length-1))
    return array
}
console.log(getLastTenCountries())

// setima questao
let initials = countries.map(element => element.slice(0, 1))

let value = 0
let count = 0
let obj = []

while (value < initials.length){
    let letter = initials[value]

    for (let i = 0; i < initials.length; i++){
        initials[i].match(letter) !== null ? count++ : count += 0
    }
    obj[value] = { letra: letter, quant: count }
    count = 0
    value++
    initials = initials.filter(element => element !== letter).map(add => add)  // para nao repetir letra
}

let maior = obj[0]
for (let i = 1; i < obj.length; i++){
    obj[i].quant > maior.quant ? maior = obj[i] : maior
}
console.log(`${maior.letra}, se repete ${maior.quant} vezes`)