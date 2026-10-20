const starField = document.getElementById('stars');
// Deterministic positions keep the sky visually consistent across reloads.
let seed = 781346;
const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const fragment = document.createDocumentFragment();
for (let i = 0; i < 115; i++) {
  const star = document.createElement('span');
  star.className = 'star';
  star.style.left = `${random() * 100}%`;
  star.style.top = `${random() * 100}%`;
  star.style.setProperty('--op', `${0.2 + random() * 0.65}`);
  star.style.setProperty('--dur', `${2 + random() * 4}s`);
  star.style.animationDelay = `-${random() * 5}s`;
  fragment.appendChild(star);
}
starField.appendChild(fragment);
document.getElementById('year').textContent = new Date().getFullYear();
