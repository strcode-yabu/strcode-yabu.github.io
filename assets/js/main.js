'use strict';

{
  const navButtonOpen = document.getElementById('nav_button__open');
  const navButtonClose = document.getElementById('nav_button__close');
  const navMenu = document.getElementById('nav_menu');

  navButtonOpen.addEventListener('click', () => {
    navMenu.showModal();
  });

  navButtonClose.addEventListener('click', () => {
    navMenu.close();
  });

  navMenu.addEventListener('click', event => {
    if (event.target === navMenu) {
      navMenu.close();
    }
  });

  for (const link of navMenu.querySelectorAll('a[href]')) {
    link.addEventListener('click', () => {
      navMenu.close();
    });
  }
}
