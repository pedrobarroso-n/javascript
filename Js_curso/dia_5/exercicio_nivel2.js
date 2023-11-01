let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/\W+/g, ' ')
let words = text.split(' ')
words.pop()
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')    // adicionar no inicio do array
shoppingCart.push('Sugar')  // adicionar no fim do array
shoppingCart.pop()  // tirar ultimo item do array
shoppingCart[3] = 'Green Tea'   
console.log(shoppingCart)

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
countries.indexOf('Ethiopia') === -1 ? countries.push('Ethiopia') : console.log('Ethiopia')

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
if (webTechs.indexOf('Sass') === -1){ 
    webTechs.push('Sass') 
    console.log(webTechs)
} else { 
    console.log('Sass is a pre-process CSS') 
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)