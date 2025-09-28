// Espera a que todo el contenido HTML se haya cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Cargar las imágenes ---
  
  // Objeto con los links de las imágenes
  const images = {
    1: "https://i.imgur.com/4eKyVkB.jpg", // link imgur portada
    2: "https://i.imgur.com/hiFpzO3.jpg", // link imgur panqueques/primera charla
    3: "https://i.imgur.com/1VpwjKx.jpg", // link imgur videollamada
    4: "https://i.imgur.com/x25sfQi.jpg", // link imgur primer beso/unicenter
    5: "https://i.imgur.com/W0wknyb.jpg", // link imgur hamaca/beso largo
    6: "https://i.imgur.com/cy4ZGCD.jpg"  // link imgur abrazo/final
  };

  // Recorre el objeto 'images' y asigna cada URL a su elemento <img> correspondiente
  for (const n in images) {
    const imgElement = document.getElementById("img" + n);
    if (imgElement && images[n]) {
      imgElement.src = images[n];
    }
  }

  // --- 2. Crear la animación de corazones ---

  const heartsContainer = document.getElementById('hearts-container');

  if (heartsContainer) {
    // Crea un nuevo corazón cada 300 milisegundos
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '♥'; // Puedes usar otros símbolos como '♡' o '💖'

      // Propiedades aleatorias para cada corazón
      const size = Math.random() * 20 + 10; // Tamaño entre 10px y 30px
      const duration = Math.random() * 5 + 5; // Duración entre 5s y 10s
      
      heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
      heart.style.fontSize = size + 'px';
      heart.style.animationDuration = duration + 's';
      heart.style.opacity = Math.random() * 0.7 + 0.3; // Opacidad entre 0.3 y 1.0

      heartsContainer.appendChild(heart);

      // Elimina el corazón del DOM después de que termine su animación para no sobrecargar la página
      setTimeout(() => {
        heart.remove();
      }, duration * 1000); // Convierte la duración a milisegundos

    }, 300);
  }

});
