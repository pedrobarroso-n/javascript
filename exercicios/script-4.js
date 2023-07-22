function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora>=6 && hora<12){
        foto.src = './imagens/pexels-gareth-davies-910411.jpg'
        document.body.style.background = 'rgba(194, 197, 9, 0.822)'
    } else if(hora>=12 && hora<18){
        foto.src = './imagens/pexels-george-desipris-858241.jpg'
        document.body.style.background = 'rgba(231, 90, 9, 0.767)'
    } else{
        foto.src = './imagens/pexels-pixabay-206359.jpg'
        document.body.style.background = 'rgba(65, 41, 87, 0.76)'
    }
}
