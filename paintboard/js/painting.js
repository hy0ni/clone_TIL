const $fileInput = document.getElementById('file');
const $modeBtn = document.getElementById('mode-btn');
const $destroyBtn = document.getElementById('destroy-btn');
const $eraserBtn = document.getElementById('eraser-btn');
const $colorOptions = Array.from(document.getElementsByClassName('color-option'));
const $color = document.getElementById('color');
const $lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CNAVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH
canvas.height = CNAVAS_HEIGHT;
ctx.lineWidth = $lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(e.offsetX, e.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}
function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}
function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}
function onColorClick(e) {
  // console.dir(e.target.dataset.color);
  const colorValue = e.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  $color.value = colorValue;
}
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    $modeBtn.innerText = 'Fill';
  } else {
    isFilling = true;
    $modeBtn.innerText = 'Draw';
  }
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CNAVAS_HEIGHT);
  }
}
function onDestroyClick() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CNAVAS_HEIGHT);
}
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  $modeBtn.innerText = 'Fill';
}

function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CNAVAS_HEIGHT);
    $fileInput.value = null;
  }
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

$lineWidth.addEventListener('change', onLineWidthChange);
$color.addEventListener('change', onColorChange);

$colorOptions.forEach(color => color.addEventListener('click', onColorClick));

$modeBtn.addEventListener('click', onModeClick);
$destroyBtn.addEventListener('click', onDestroyClick);
$eraserBtn.addEventListener('click', onEraserClick);

$fileInput.addEventListener('change', onFileChange);