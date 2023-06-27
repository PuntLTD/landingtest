const button = document.querySelector('button[data-toggle="dark"]');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
