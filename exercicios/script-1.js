function Contar(){
    var ini = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length==0 || end.value.length==0 || pas.value.length==0){
        res.innerHTML = 'Impossivel contar'
        window.alert('ERRO!... há dados faltando')
    }else{
        res.innerHTML = 'Contando:<br>'
        var i = Number(ini.value)  //para pegar o valor digitado
        var e = Number(end.value)
        var p = Number(pas.value)
        if(p<=0){  //caso coloque o passo como 0
            window.alert('passo INVALIDO! considerando valor igual a 1')
            p = 1
        }
        if(i < e) {
            for(var c = i; c <= e; c += p){  //contagem crescente
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(var c = i; c >= e; c -= p){  //contagem decrescente
                res.innerHTML += `${c} \u{1F449}`
            }
        } 
        res.innerHTML += '\u{1F3C1}'
    }
}