const q = id => document.getElementById(id);
const wait = ms => new Promise(r => setTimeout(r, ms));
const onlyDigits = v => String(v).replace(/\D/g, '');
const openModal = el => el && el.classList.add('show');
const closeModal = el => el && el.classList.remove('show');

function showDropNotification(text, color='#eef3ff') {
  const n = document.createElement('div');
  n.className = 'drop-notification';
  n.style.color = color;
  n.textContent = text;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 2900);
}

function showDbStatus(msg, type='info') {
  const colors = { info:'#63a8ff', ok:'#63d09a', error:'#ff7b7b', saving:'#ffcf63' };
  const icons  = { info:'🔵', ok:'✅', error:'❌', saving:'💾' };
  console.log(`[DB] ${icons[type]} ${msg}`);
}
