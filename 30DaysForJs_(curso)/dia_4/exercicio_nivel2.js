
let pontuacao = 89
if (pontuacao >= 90 && pontuacao <= 100){
    console.log('Codigo da pontuação: UM')
} else if (pontuacao >= 70 && pontuacao <= 89){
    console.log('Codigo da pontuação: B')
} else if(pontuacao >= 60 && pontuacao <= 69){
    console.log('Codigo da pontuação: C')
} else if (pontuacao >= 50 && pontuacao <= 59){
    console.log('Codigo da pontuação: D')
} else{
    console.log('Codigo da pontuação: F')
}

let estacao = prompt('Mes').toLowerCase()
if (estacao == 'setembro' || estacao == 'outubro' || estacao == 'novembro'){
    alert('é Outono')
} else if (estacao == 'dezembro' || estacao == 'janeiro' || estacao == 'fevereiro'){
    alert('é Inverno')
} else if (estacao == 'março' || estacao == 'abril' || estacao == 'maio'){
    alert('é Primavera')
} else{
    alert('é Verão')
}

let dia = prompt('Que dia da semana é hoje?').toLowerCase()
if (dia === 'sabado' || dia === 'domingo'){
    alert('É fim de semana')
} else{
    alert('È dia normal de trabalho')
}