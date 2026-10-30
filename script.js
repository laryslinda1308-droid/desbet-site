const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuButton.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Abrir menu'); }
}));

const checks = [...document.querySelectorAll('.check-item input')];
const count = document.getElementById('check-count');
const result = document.getElementById('check-result');
const reflectButton = document.getElementById('reflect-button');
const updateCount = () => {
  const selected = checks.filter(input => input.checked).length;
  count.textContent = `${selected} ${selected === 1 ? 'selecionado' : 'selecionados'}`;
};
checks.forEach(input => input.addEventListener('change', updateCount));
reflectButton?.addEventListener('click', () => {
  const selected = checks.filter(input => input.checked).length;
  let message;
  if (selected === 0) {
    message = 'Você não marcou nenhum item. Tudo bem: use este espaço para refletir sobre seus hábitos e seus limites. Se algo te preocupa, converse com alguém de confiança.';
  } else if (selected <= 2) {
    message = 'Você reconheceu alguns pontos que merecem atenção. Vale observar como isso afeta sua rotina e conversar com alguém de confiança. Você não precisa esperar a situação piorar para buscar apoio.';
  } else {
    message = 'Vários pontos chamaram sua atenção. Isso não é um diagnóstico, mas pode ser um bom momento para procurar apoio profissional e conversar com alguém de confiança. Você merece cuidado, sem julgamento.';
  }
  result.innerHTML = `<span class="result-symbol">↳</span><p>${message}</p>`;
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
