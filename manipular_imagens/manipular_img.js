const img = document.getElementById('imagem');

if (document.body.clientWidth >= "1000"){ // altera a imagem com base no tamanho do body em px
    img.width = "600";
    img.height = "500";
} else if (document.body.clientWidth > "600" && document.body.clientWidth < "1000") {
    img.width = "390";
    img.height = "250";
} else {
    img.width = "210";
    img.height = "160";
}

img.addEventListener('click', () => {  //adiciona um evento que abre uma funcao que altera a imagem
    img.setAttribute('src', '../exercicios/imagens-2/pexels-alex-green-6626075.jpg')
})