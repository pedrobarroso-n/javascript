function slide1() {
    document.getElementById('img').src = "../exercicios/imagens/pexels-gareth-davies-910411.jpg"; // pega o item e adiciona um src para mostra a imagem
    setTimeout("slide2()", 4000); // pula para esse item, tempo q demora para isso
    document.getElementById('link').href = "../exercicios/imagens/pexels-gareth-davies-910411.jpg"; // pega o item e adiciona um href para criar um link
}

function slide2() {
    document.getElementById('img').src = "../exercicios/imagens/pexels-george-desipris-858241.jpg";
    setTimeout("slide3()", 4000); 
    document.getElementById('link').href = "../exercicios/imagens/pexels-george-desipris-858241.jpg";
}

function slide3() {
    document.getElementById('img').src = "../exercicios/imagens/pexels-pixabay-206359.jpg";
    setTimeout("slide1()", 4000);
    document.getElementById('link').href = "../exercicios/imagens/pexels-pixabay-206359.jpg";
}