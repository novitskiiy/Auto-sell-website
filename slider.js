let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.review');
  const totalSlides = slides.length;

  // Убираем класс видимости у всех слайдов
  slides.forEach(slide => slide.style.display = 'none');

  currentSlide += step;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Показываем только текущий слайд
  slides[currentSlide].style.display = 'block';
}

// Инициализируем первый слайд
document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0);
});
