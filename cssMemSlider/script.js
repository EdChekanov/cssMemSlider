const image = document.querySelector('.slider_main');
const controls = document.querySelectorAll('.footer_controls ul li label');
const text = document.querySelector('.footer_text p');
const textData = ['I listening you..?!', "It's for me?", 'Give me my beer?', 'Pretty cool!', 'Relax! Take it easy.']

function changeSlide(evt) {
  image.style.backgroundImage = `url(images/${evt.target.htmlFor}.jpg)`;
  text.style.opacity = '0';
  setTimeout(() => {
    text.textContent = textData[evt.target.htmlFor];
    text.style.opacity = '1';
  }, 500);
}

controls.forEach(el => el.addEventListener('click', changeSlide));
controls.forEach(el => el.addEventListener('touch', changeSlide));