document.addEventListener("DOMContentLoaded", function() { //código relacionado a mudança de imagem na página inicial
    const imageElement = document.getElementById('image');
    const imageList = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg','imagem4.jpg'];
    let currentIndex = 0;
  
    function changeImage() { //código relacionado a mudança de imagem na página inicial
      imageElement.src = imageList[currentIndex];
      currentIndex = (currentIndex + 1) % imageList.length;
    }
  
    // Chama a função changeImage a cada 3 segundos (3000 milissegundos)
    setInterval(changeImage, 100000);
  
    // Código relacionado à navegação entre as guias
    document.getElementById("imagemFilmes").addEventListener("click", function () {
        window.open("Pag-Filmes.html", "_blank");
    });
  
    document.getElementById("albuns").addEventListener("click", function () {
        window.open("Pag-albuns.html","_blank");
    });
  
    document.getElementById("perfil").addEventListener("click", function () {
      window.open("Pag-Perfil.html", "_blank");
    });
  });
  