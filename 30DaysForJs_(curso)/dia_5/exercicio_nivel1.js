let arr1 = []   // criei um array vazio

let arr2 = Array(5).fill('Z')   // criei um array de cinco item preenchido de 'Z'

arr2.length    // verificando o tamanho do array

console.log(arr2[0], arr2[2], arr2[arr2.length -1])   // peguei o 1º, o 3º e o ultimo item do array

const mixedDataTypes = ['hello, world', 0, null, undefined, [], true, 3.96]
mixedDataTypes.length

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length -1])

console.log(itCompanies.join(' '))  // mostra o array de outra forma

itCompanies[0]= itCompanies[0].toLocaleUpperCase()
itCompanies[1]= itCompanies[1].toLocaleUpperCase()
itCompanies[2]= itCompanies[2].toLocaleUpperCase()
itCompanies[3]= itCompanies[3].toLocaleUpperCase()
itCompanies[4]= itCompanies[4].toLocaleUpperCase()
itCompanies[5]= itCompanies[5].toLocaleUpperCase()
itCompanies[6]= itCompanies[6].toLocaleUpperCase()
console.log(itCompanies.join(' '))

const arr3 = ['são grandes empresas de TI']
console.log(itCompanies.concat().join(', '))    // concat mescla os dois arrays

const isHave = 'APPLE'
itCompanies.includes(isHave) === true ? console.log(isHave) : console.log('Empresa não encontrada')  // metodo include retorna true se o item estiver no array

// ?.....

itCompanies.sort()  // ordena o array de forma crescente
itCompanies.reverse()   // ordena o array de forma descrecente (uso depois do sort)

console.log(itCompanies.slice(0, 3))    // pegar os primeiros 3 itens

console.log(itCompanies.slice(4, itCompanies.length))   // pegar os ultimos 3 itens

console.log(itCompanies.slice(2,5))   // pegar do indice 2 ao 4 (ultimo nao conta)

console.log(itCompanies.splice(0,1))    // remove o primeiro item do array  

console.log(itCompanies.splice(2, 3))   // remove 3 itens a apartir do index(2)

console.log(itCompanies.splice(itCompanies.length-1, 1))    // remove o ultimo item do array

console.log(itCompanies.splice())   // remove todos os itens do array