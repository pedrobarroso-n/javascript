
let base = prompt('base: ')   // exibi uma caixa interagivel com o usuario
let altura = prompt('altura: ') 
alert(0.5 * base * altura)   // mostra uma mensagem ao usuario

let lado1 = prompt('L1 ')
let lado2 = prompt('L2 ')
let lado3 = prompt('L3 ')
alert((+lado1) + (+lado2) + (+lado3))  // o (+) ao lado da variavel a trnasforma em numero, pois por padrao ela ja vem srting

let largura = prompt('largura ')
let comprimento = prompt('comprimento ')
alert(`Area = ${largura * comprimento}, Perimetro ${ 2* ( Number(largura) + parseInt(comprimento) )}`)  // o (parseInt) passa o valor para inteiro enquanto o (Number) o transforma em um numero tanto float quanto int

let raio = prompt('raio ')
alert(`Area = ${3.14 * (+raio)**(+raio)} Circunferencia = ${2 * 3.14 * (+raio)}`)

let x = prompt('X ')
alert(`(${x}, ${(2*x-2)})`)

// ?.....
// ?.....
// ?.....

let hora = prompt('hora ')
let taxa = prompt('taxa ')
alert('Ganha por dia R$' + hora * taxa )

let nome = prompt('nome')
nome.length < 7             // comparação
    ? alert('nome curto')   // se a comparação resultar em true mostre isso
    : alert('nome longo')   // se a comparação resultar em false mostre isso

let name = prompt('nome ')
let sobrenome = prompt('sobrenome ')
sobrenome.length < name.length
    ? alert('Seu nome é maior que seu sobrenome')
    : alert('Seu nome é menor que seu sobrenome')

let myAge = 26
let yourAge = 19
console.log(`Eu sou ${myAge - yourAge} anos mais velho que você`)

let year = prompt('Ano de Nascimento')
2023 - year > 17
    ? alert(`Você ${2023-year} tem anos e já pode dirigir`)
    : alert(`Você tem apenas ${2023-year} anos espere mais ${18 - (2023 - year)} anos para poder dirigir`)

// ?.....

let data = new Date()
console.log(
    `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}\n${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}\n${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
)
