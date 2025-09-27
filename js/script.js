const toggleBtn = document.getElementById('darkModeToggle');
const root = document.body;
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');
const cards = document.querySelectorAll('.card, .accordion');

// 状態保存（localStorage利用で再訪時も記憶）
function setDarkMode(enable) {
  if (enable) {
    root.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    cards.forEach(card => card.classList.add('dark-mode'));
    toggleBtn.textContent = '☀️ ライトモード';
    localStorage.setItem('darkMode', 'on');
  } else {
    root.classList.remove('dark-mode');
    navbar.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    cards.forEach(card => card.classList.remove('dark-mode'));
    toggleBtn.textContent = '🌙 ダークモード';
    localStorage.setItem('darkMode', 'off');
  }
}

// 初期化時にlocalStorage判定
document.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('darkMode') === 'on';
  setDarkMode(isDark);
});

toggleBtn.addEventListener('click', () => {
  const isDark = !root.classList.contains('dark-mode');
  setDarkMode(isDark);
});
