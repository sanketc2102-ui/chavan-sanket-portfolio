const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');

const toggleMenu = function () {
  menu.classList.toggle('open');
  icon.classList.toggle('open');
};
