const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute(
    'data-theme',
    currentTheme === 'dark' ? 'light' : 'dark'
  );
});
