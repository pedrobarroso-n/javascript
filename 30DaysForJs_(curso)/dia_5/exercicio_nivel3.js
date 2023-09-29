const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(`MIN: ${ages[0]} MAX: ${ages[ages.length-1]}`)

console.log(ages.slice(4, 6))

let media = 0;
media += ages[0];
media += ages[1];
media += ages[2];
media += ages[3];
media += ages[4];
media += ages[5];
media += ages[6];
media += ages[7];
media += ages[8];
media += ages[9];
media /= ages.length
console.log(media);

let max = ages[ages.length-1]
let min = ages[0]
console.log('Faixa de idade: ' + (max - min))

console.log(Math.abs(max - media))
console.log(Math.abs(min - media))

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

console.log(countries.slice(0,10))

console.log(countries.slice(3,8))

// ?.....