function verificar() {
    var agora =  new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]....Verifique os dados e tente novamente')
    } else{
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria um elemento img no html
        img.setAttribute('id', 'foto')

        if (sexo[0].checked){ //caso seja homem
            genero = 'Homem'
            if (idade >=0 && idade <= 14) {
                img.setAttribute('src',',/imagens-2/pexels-thgusstavo-santana-15631407.jpg')
            }else if (idade > 14 && idade < 65){
                img.setAttribute('src',',/imagens-2/pexels-andrea-piacquadio-775279.jpg')
            }else{
                img.setAttribute('src',',/imagens-2/pexels-alex-green-6626075.jpg') //poe a img declarada na tag src
            }

        } else if (sexo[1].checked){ //caso seja mulher
            genero = 'Mulher'
            if (idade >=0 && idade <= 14) {
                img.setAttribute('src',',/imagens-2/pexels-thgusstavo-santana-15645252.jpg')
            }else if (idade > 14 && idade < 65){
                img.setAttribute('src',',/imagens-2/pexels-vinicius-wiesehofer-1130626.jpg')
            }else{
                img.setAttribute('src',',/imagens-2/pexels-andrea-piacquadio-788567.jpg')
            }
        }

        res.style.textAlign = 'center' //poe a resposta centralizada
        res.innerHTML = `Detectado, ${genero} de ${idade} anos`
        res.appendChild(img) //declara a img como filha da div res
    }
}