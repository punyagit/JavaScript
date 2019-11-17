/* eslint-disable no-use-before-define */
const canvas = document.getElementById('canvas');
// const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', (e) => {
  getCursorPosition(canvas, e);
});

const ctx = canvas.getContext('2d');

// eslint-disable-next-line no-shadow
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  ctx.beginPath();
  ctx.arc(x, y + 50, 100, 0, 2 * Math.PI);
  ctx.stroke();
}
