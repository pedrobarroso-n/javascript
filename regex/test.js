/*===============================|? REGEX ?|==============================================*/

let string = "Aqui"; // string
let Regex = /a/; // expressao para achar na string
Regex.test(string); // retorna "true" se estiver ou "false" se nao estiver
string.match(Regex); // captura a parte procurada

/*===============================|REGEX AVANÇADO|============================================*/

Regex = /Aq./; // o (.) no final indica que qualquer caractere apos ele sera considerado na busca
console.log(Regex.test(string));

Regex = /a/i; // (i) apos a regex significa que procurara a expresao tanto em maiuscula quanto em minuscula
console.log(Regex.test(string));

string = "Aqui Aqui Aqui";
Regex = /A/g; // (g) apos a regex significa que procurara na expressao inteira e nao em uma unica palavra, pode combinar em /ig ou /gi
console.log(Regex.test(string));

string = "Aquiiiii";
Regex = /i$/; // a string tem que terminar com esse item
console.log(Regex.test(string));
Regex = /^A/; // a string tem q começar com esse item
console.log(Regex.test(string));

Regex = /[aeiou]/; // usar [] fara com que procure todos os que estao dentro da sequencia
console.log(Regex.test(string));
Regex = /[^qui]/; // usar o [^] fara com que nao considere essas que estao dentro na procura
console.log(Regex.test(string));

Regex = /a|i/; // procurar ou um ou outro na string
console.log(Regex.test(string));

Regex = /i+/; // encontrar item que se repete ao longo da string
console.log(Regex.test(string));
Regex = /ui*/; // encontrar item que se repete ou nao ao longo da string
console.log(Regex.test(string));

Regex = /ui{3,}i/; // minimo de 3 repeticoes entre essas partes
console.log(Regex.test(string));
Regex = /ui{2,4}i/; // entre 2 e 4 repeticoes entre essas partes
console.log(Regex.test(string));
Regex = /ui{4}i/; // 4 repeticoes entre essas partes
console.log(Regex.test(string));

string = "Aqui mano"
Regex = /Aqui/g;
string.replace(Regex, "Achei") // modificar a regex capturada

"Aqui mano".replace(/(\w+)\s(\w+)/, '$2 $1'); // inverti a ordem da string

/*==============================|REGEX ABREVIADAS|==========================================*/

Regex = /\s/; // considera espaços em branco na string
console.log(Regex.test(string));
Regex = /\S/; // desconsidera espaços em branco na string
console.log(Regex.test(string));

Regex = /\w/; // considerar os elementos de a-z, A-Z e 0-9
console.log(Regex.test(string));
Regex = /\W/; // desconsiderar os elementos de a-z, A-Z e 0-9
console.log(Regex.test(string));

Regex = /\d/; // considerar os digitos numericos
console.log(Regex.test(string));
Regex = /\D/; // desconsiderar os digitos numericos
console.log(Regex.test(string));

Regex = /[a-z]|[A-Z]|[0-9]/; // procurar letras minusculas do alfabeto ou letras maiusculas do alfabeto ou digitos, pode ser usado separadamente
console.log(Regex.test(string));

Regex = /(?=oi)/; // (lookaheads - formar padroes) esse funciona se for encontrada a condicao
Regex = /(?!123)/; // (lookaheads - formar padroes) esse funciona se nao for encontrada a condicao

//--> em html nos <form> e possivel usar regex na parte pattern para uma validacao