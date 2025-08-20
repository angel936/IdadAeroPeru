document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const totalImages = 10;
  let current = 1;

  function updateBackground() {
    // ✅ Esta es la versión que reemplazas
    const fileName = `img${current} - 1280x853.jpg`;
    const imagePath = `Img/header/${fileName}`;

    const preload = new Image();
    preload.src = imagePath;

    preload.onload = () => {
      hero.style.backgroundImage = `url('${imagePath}')`;
      hero.style.transition = 'background-image 1s ease-in-out';
    };

    current = current < totalImages ? current + 1 : 1;
  }

  updateBackground();
  setInterval(updateBackground, 5000);
});