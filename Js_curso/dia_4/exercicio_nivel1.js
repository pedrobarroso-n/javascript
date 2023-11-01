
let idade = prompt('Qual sua idade')
if (idade >= 18){   // condição se for "true"
    alert('Você ja tem idade o suficiente para dirigir')
} else{             // condição se for "false"
    alert(`Ainda faltam ${18-idade} anos para você poder dirigir`)
}

let myAge = 39
let yourAge = prompt('Idade')
if (myAge > yourAge){ alert('Sou mais velho que você') } 
else{ alert('Você é mais velho que eu') }

let a = 9, b = 10
a > b               // o uso de operador ternario se assemelha a usar o if else
    ? console.log('(A) é maior que (B)')
    : console.log('(B) é maior que (A)')

let parOUimpar = 7
if (parOUimpar % 2 == 0) {
    console.log('PAR')
} else{
    console.log('IMPAR')
}
