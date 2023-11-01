let c = 0, x = 0
for (let i = 0; i <= 10; i++ ){    // laço de repetição for
    console.log(i)
}
while (c <= 10){    // laço de repetição while
    console.log(c)
    c++
}
do{     // laço de repetição do while
    console.log(x)
    x++
} while (x <= 10)

let a = 10, b = 10
for (let i = 10; i >= 10; i--){
    console.log(i)
}
while (a >= 0){
    console.log(a)
    a--
}
do{
    console.log(b)
    b--
} while (b >= 0)

let n = 19
for (n; n >= 0; n--){
    console.log(n)
}

let figure = '#'
for (let i = 0; i <= 7; i++){
    console.log(figure)
    figure+='#'
}

for (let i = 0; i < 11; i++){console.log(`${i} * ${i} = ${i * i}`)}

for (let i = 0; i < 11; i++){console.log(`${i} ${i**2} ${i**3}`)}

for (let i = 0; i < 101; i++){
    if (i % 2 == 0){
        console.log(`Numeros pares: ${i}`)
    } else{
        console.log(`Numeros impares: ${i}`)
    }
}

console.log(`Numeros primos: 2\nNumeros primos: 3\nNumeros primos: 5\nNumeros primos: 7`)
for (let i = 0; i < 101; i++){
    if (i != 1 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0){
        console.log(`Numeros primos: ${i}`)
    }
}

let num = 0
for (let i = 0; i < 101; i++){num+=i}
console.log(num)

let even = 0, odd = 0, array = []
for (let number = 0; number < 101; number++){ number % 2 == 0 ? even+=number : odd+=number} 
array.push(even, odd)
console.log(`A soma dos numeros pares é ${even} e dos impares é ${odd}\n${array}`)

let array2 = []
for (let i = 0; i < 5; i++){array2.push(Math.floor(Math.random() *10))}
console.log(array2.join(''))

// ?.....

let codigo = [], valores = [0,'a',1,'b',2,'c',3,'d',4,'e',5,'f',6,'g',7,'h',8,'i',9,'j']
for (let i = 0; i < 6; i++){codigo.push(valores[Math.floor(Math.random() * 20)])}
console.log(codigo.join(''))