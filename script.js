document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.carousel-image');
  let currentImageIndex = 0;

  // Exibir a primeira imagem
  images[currentImageIndex].classList.add('active');

  // Adicionar evento de clique para cada imagem
  images.forEach(function(image, index) {
    image.addEventListener('click', function() {
      // Remover a classe 'active' da imagem atual
      images[currentImageIndex].classList.remove('active');
      
      // Atualizar o índice da próxima imagem
      currentImageIndex = index === images.length - 1 ? 0 : index + 1;
      
      // Adicionar a classe 'active' à próxima imagem
      images[currentImageIndex].classList.add('active');
    });
  });
});