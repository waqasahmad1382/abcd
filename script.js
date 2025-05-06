
let countdown = 10;
const countdownElement = document.getElementById('countdown-number');
const countdownScreen = document.getElementById('countdown-screen');
const bgMusic = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

let timer = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown <= 0) {
    clearInterval(timer);
    countdownScreen.style.display = 'none';
    bgMusic.play();
  }
}, 1000);

toggleBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleBtn.textContent = '🔊';
  } else {
    bgMusic.pause();
    toggleBtn.textContent = '🔇';
  }
});

// Simple fireworks effect
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height / 2;
  let radius = Math.random() * 3 + 2;
  let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  fireworks.push({ x, y, radius, alpha: 1, color });
}

function drawFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, i) => {
    ctx.beginPath();
    ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
    ctx.fillStyle = fw.color;
    ctx.globalAlpha = fw.alpha;
    ctx.fill();
    fw.alpha -= 0.01;
    if (fw.alpha <= 0) fireworks.splice(i, 1);
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawFireworks);
}

setInterval(createFirework, 200);
drawFireworks();
