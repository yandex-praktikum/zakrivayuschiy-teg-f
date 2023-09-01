/* Этот скрипт использует имена классов theme-menu__button, theme-dark, theme-light и theme-auto;
еще атрибуты disabled и data-theme. Поэтому их нельзя менять в HTML. */

function changeTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-menu__button');

  function setDisabled(theme) {
    themeButtons.forEach((item) => {
      if (item.getAttribute('data-theme') === theme) {
        item.setAttribute('disabled', true);
      } else {
        item.removeAttribute('disabled');
      }
    });
  }

  if ([...root.classList].includes('theme-light')) {
    setDisabled('light');
  } else if ([...root.classList].includes('theme-dark')) {
    setDisabled('dark');
  } else {
    setDisabled('auto');
  }

  themeButtons.forEach((button) => {
    button.onclick = () => {
      changeTheme(button.getAttribute('data-theme'));
      setDisabled(button.getAttribute('data-theme'));
    };
  });
});
