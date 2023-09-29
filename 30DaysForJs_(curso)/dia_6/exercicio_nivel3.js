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
const copyCountries = []
for (const copy in countries){copyCountries.push(countries[copy])}
console.log(copyCountries)

const sortedCountries = countries.slice()
console.log(sortedCountries)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(webTechs.sort())
console.log(mernStack.sort())

// pulei da 4 a 8 por repetição

const reverseArray = []
let count = countries.length-1
while (count >= 0){
    reverseArray.push(countries[count].toLocaleUpperCase())
    count--
}
console.log(reverseArray)