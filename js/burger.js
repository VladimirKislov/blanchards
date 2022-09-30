document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu__icon');
  const headerNav = document.querySelector('.header__nav');

  menuIcon.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav-active');
    menuIcon.classList.toggle('menu__icon-active');
  });

  // new SimpleBar(document.getElementById('header__nav'), {
  //   autoHide: false,
  // });
}())
