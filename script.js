const links = document.querySelectorAll('.nav a');

links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#edf4ff';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#a9b7ce';
  });
});
