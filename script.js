const trackS = document.getElementById('sliderTrack');
const slideWidthS = 240;
let currentIndex = 0;

// Clone slides for seamless loop
const slides = trackS.children;
const totalOriginalSlides = slides.length;

// Clone and append
for (let i = 0; i < totalOriginalSlides; i++) {
  trackS.appendChild(slides[i].cloneNode(true));
}

const totalSlides = trackS.children.length;

function moveToNextSlide() {
  currentIndex++;
  trackS.style.transition = 'transform 0.5s ease-in-out';
  trackS.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

  // Reset to original after clones (invisible)
  if (currentIndex === totalOriginalSlides) {
    setTimeout(() => {
      trackS.style.transition = 'none';
      trackS.style.transform = 'translateX(0)';
      currentIndex = 0;
    }, 500); // Must match transition duration
  }
}

setInterval(moveToNextSlide, 5000); // 2 seconds delay



//  slider cards 2
const track = document.getElementById('slider-track');
const originalSlides = Array.from(track.children);
const totalOriginal = originalSlides.length;
let index = 0;

const slideWidth = originalSlides[0].offsetWidth + 40; // slide + margin

// Clone for looping
originalSlides.forEach(slide => track.appendChild(slide.cloneNode(true)));

function moveTo(i) {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${i * slideWidth}px)`;
}

function nextSlide() {
  index++;
  moveTo(index);
  if (index === totalOriginal) {
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      index = 0;
    }, 500);
  }
}

function prevSlide() {
  if (index === 0) {
    index = totalOriginal;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  setTimeout(() => {
    index--;
    moveTo(index);
  }, 20);
}

// Autoplay
let autoplay = setInterval(nextSlide, 3000);

// Button Events
document.getElementById('nextBtn').onclick = () => {
  clearInterval(autoplay);
  nextSlide();
  autoplay = setInterval(nextSlide, 3000);
};

document.getElementById('prevBtn').onclick = () => {
  clearInterval(autoplay);
  prevSlide();
  autoplay = setInterval(nextSlide, 3000);
};
