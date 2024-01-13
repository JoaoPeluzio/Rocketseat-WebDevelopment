let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener("click", (Event) => {
  document.documentElement.classList.toggle('light');

  const mode = darkMode ? 'light' : 'dark';
  Event.currentTarget.querySelector('span').textContent = ` ${mode} mode ativado! `;

  darkMode = !darkMode;
})