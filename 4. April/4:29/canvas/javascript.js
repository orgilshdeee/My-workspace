const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1;
const color = ["red", "green", "blue", "purple", "orange", "violet"];

class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
  update() {
    this.draw();
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * 0.89;
    } else {
      this.dy += gravity;
    }

    if (this.x + this.radius > canvas.height || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

let balls;

function init() {
  balls = [];
  for (let i = 0; i < 50; i++) {
    const x = getRandomIntInclusive(0, canvas.width);
    const y = getRandomIntInclusive(0, canvas.width / 1.5);
    const radius = getRandomIntInclusive(10, 50);
    const dy = getRandomIntInclusive(-1, 1);
    const dx = getRandomIntInclusive(-1, 1);
    const color = randomColor();

    balls.push(new Ball(x, y, radius, dy, dx, color));
  }
}

function animation() {
  requestAnimationFrame(animation);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < balls.length; i++) {
    balls[i].update();
  }
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return color[Math.floor(Math.random() * color.length) + 1];
}
init();
animation();
