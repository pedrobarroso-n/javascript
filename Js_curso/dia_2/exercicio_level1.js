let desafio = '30 Dias de JavaScript'
console.log(desafio)
console.log(desafio.length)

desafio.toLocaleUpperCase   // por todas as letras em Maiusculo
desafio.toLocaleLowerCase   // por todas as letras em Minusculo

desafio.substring(0,1)  // mostra do index(0) até o index(1) da variavel (não pega a ultima)
desafio.substring(3)   // mostra a frase a partir do index(3) até o final

desafio.includes('Script')  // verifiquei se a palavra se encontra na variavel

desafio.split()  // transforma a string em um array
desafio.split(' ')  // mesma coisa do de cima mais separado por espaços
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(' ') 

desafio.replace('JavaScript', 'Python')  // troca a palavra da frase(primeira) pela outra(segunda)

desafio.charAt(15)  // mostra o caracter do index(15)
desafio.charCodeAt('J')  // mostra o codigo do caracter

desafio.indexOf('a')    // mostra o index da primeira aparição desse caracter
desafio.lastIndexOf('a')    // mostra o index da ultima aparição desse caracter
'You cannot end a sentence with because because because is a conjunction'.indexOf('because')
'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because')

'You cannot end a sentence with because because because is a conjunction'.search('because')

"  30 Dias de JavaScript  ".trim()  // retira os espaços iniciais e finais na string

desafio.startsWith('30 D')  // retorna true se começar com oq esta escrito e false se nao
desafio.endsWith('cript')   // retorna true se terminar com oq esta escrito e false se nao

desafio.match(/a/gi)    // encontra todos os (a) da frase 

'30 dias de'.concat(' JavaScript')  // concatena a string com oq esta entre parenteses

desafio.repeat(2)   // repete a varivale (2) vezes