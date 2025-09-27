document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  const root = document.body;
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('footer');
  const cards = document.querySelectorAll('.card');

  // モード切替関数
  function setDarkMode(enable) {
    if(enable){
      root.classList.add('dark-mode');
      navbar.classList.add('dark-mode');
      footer.classList.add('dark-mode');
      cards.forEach(card => card.classList.add('dark-mode'));
      toggleBtn.textContent = "☀️ ライトモード";
      localStorage.setItem('darkMode', 'on');
    }else{
      root.classList.remove('dark-mode');
      navbar.classList.remove('dark-mode');
      footer.classList.remove('dark-mode');
      cards.forEach(card => card.classList.remove('dark-mode'));
      toggleBtn.textContent = "🌙 ダークモード";
      localStorage.setItem('darkMode', 'off');
    }
  }

  // 初期チェック
  setDarkMode(localStorage.getItem('darkMode') === 'on');

  // イベント
  toggleBtn.addEventListener('click', () => {
    setDarkMode(!root.classList.contains('dark-mode'));
  });
});
