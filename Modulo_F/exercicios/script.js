let num = document.getElementById('num')
let lis = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function Enum(n){ // se e numero
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inlista(n, l){ //se ja esta na lista, (n) para o num.value e (l) para o valores
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){ //adicionar ao select
    if(Enum(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lis.appendChild(item)
    }else{
        window.alert('Valor invalido ou ja encontrado')
    }
    num.value = '' //para o numero sumir apos ser adicionado
    num.focus()  //foca o mouse no input para n precisar clicar novamente
}
function finalizar(){ //mostrar as informaçoes extras apos clicar
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = '' //para o html começar vazio antes de adicionar as informaçoes abaixo
        res.innerHTML += `<p>Ao todo a ${tot} elementos</p>`
        res.innerHTML += `<p>Maior valor encontrado ${maior} <br>Menor valor encontrado ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma} <br> A media dos itens da ${media}</p>`
    }
}