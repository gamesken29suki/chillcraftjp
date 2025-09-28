document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  const root = document.body;
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('footer');
  const cards = document.querySelectorAll('.card');

  document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('memberSearch');
  const roleSelect = document.getElementById('roleFilter');
  const deptSelect = document.getElementById('deptFilter');
  const cards = document.querySelectorAll('.member-card');
  function filterMembers() {
    const keyword = (searchInput.value || '').toLowerCase();
    const role = roleSelect.value;
    const dept = deptSelect ? deptSelect.value : "";
    cards.forEach(card => {
      const name = card.querySelector('.card-title').textContent.toLowerCase();
      // flipカード裏側p要素も検索
      const desc = card.querySelector('.flip-card-back p') 
        ? card.querySelector('.flip-card-back p').textContent.toLowerCase() 
        : "";
      const roleClasses = card.className;
      const deptValue = (card.dataset.dept || '').toLowerCase();
      const matchKeyword = name.includes(keyword) || desc.includes(keyword);
      const matchRole = (role === "") || roleClasses.includes(`border-${role}`);
      const matchDept = (dept === "") || deptValue.includes(dept.toLowerCase());
      card.parentElement.style.display = (matchKeyword && matchRole && matchDept) ? "" : "none";
    });
  }
  searchInput.addEventListener('input', filterMembers);
  roleSelect.addEventListener('change', filterMembers);
  if(deptSelect) deptSelect.addEventListener('change', filterMembers);
});

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
function toggleBubble(card) {
  // すべて閉じる
  document.querySelectorAll('.member-card').forEach(function(el){
    if(el !== card) el.classList.remove('show-bubble');
  });
  // 自分をtoggle
  card.classList.toggle('show-bubble');
}
function vote(id) {
  let key = 'vote_' + id;
  let n = window.localStorage.getItem(key);
  n = n ? parseInt(n, 10) + 1 : 1;
  window.localStorage.setItem(key, n);
  document.getElementById('vote-' + id).textContent = n;
  if (elem) elem.textContent = n;
}

// 初回読み込み時に数字セット
['build1'].forEach(id => {
  let key = 'vote_' + id;
  let n = window.localStorage.getItem(key) || 0;
  document.getElementById('vote-' + id).textContent = n;
  if (elem) elem.textContent = n;
});
function vote(id) {
  let key = 'vote_' + id;
  let n = window.localStorage.getItem(key);
  n = n ? parseInt(n, 10) + 1 : 1;
  window.localStorage.setItem(key, n);
  document.getElementById('vote-' + id).textContent = n;
  if (elem) elem.textContent = n;
}

// 初回読み込み時に数字セット
['build2'].forEach(id => {
  let key = 'vote_' + id;
  let n = window.localStorage.getItem(key) || 0;
  document.getElementById('vote-' + id).textContent = n;
  if (elem) elem.textContent = n;
});
function vote(id) {
  let key = 'vote_' + id;
  let n = window.localStorage.getItem(key);
  n = n ? parseInt(n, 10) + 1 : 1;
  window.localStorage.setItem(key, n);
  document.getElementById('vote-' + id).textContent = n;
  if (elem) elem.textContent = n;
}

// 初回読み込み時に数字セット
['build3'].forEach(id => {
  let key = 'vote_' + id;
  let n = window.localStorage.getItem(key) || 0;
  document.getElementById('vote-' + id).textContent = n;
  if (elem) elem.textContent = n;
});
function loadMessages() {
  const msgs = JSON.parse(localStorage.getItem('msgBoard') || '[]');
  const ul = document.getElementById('msgBoard');
  ul.innerHTML = '';
  msgs.forEach(txt => {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.innerHTML = `<i class="fa-solid fa-user me-2 text-info"></i>${txt}`;
    ul.appendChild(li);
  });
}
document.getElementById('messageForm').onsubmit = function(e) {
  e.preventDefault();
  const input = document.getElementById('msgText');
  if(input.value.trim()) {
    let msgs = JSON.parse(localStorage.getItem('msgBoard') || '[]');
    msgs.push(input.value);
    localStorage.setItem('msgBoard', JSON.stringify(msgs));
    input.value = '';
    loadMessages();
  }
};
loadMessages();

document.getElementById('faqSearch').addEventListener('input', function() {
  const keyword = this.value.trim().toLowerCase();
  document.querySelectorAll('#faqAccordion .accordion-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = (!keyword || text.includes(keyword)) ? '' : 'none';
  });
});
