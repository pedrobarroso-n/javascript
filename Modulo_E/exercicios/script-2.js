function Tabuada(){
    var num = document.querySelector('input#num')
    var tab = document.getElementById('tab')
    if(num.value.length == 0){
        window.alert('Voce esqueceu de digitar o valor')
    }else{
        var n = Number(num.value)
    }
    var c = 1
    tab.innerHTML = ''  //limpa a tabuada e evita que ela junte as outras caso digite outro valor em seguida
    while(c <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.value = `tab${c}`  //necessario para forms por exemplo, para o JS nem tanto
        tab.appendChild(item)
        c++
    }
}