const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
const { body } = document;

bgImage.src = `img/${chosenImage}`;

body.appendChild(bgImage);

if (chosenImage !== images[0]) {
  body.style.color = '#fff';
}