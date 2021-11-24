"use strict";

// Burger toggle
var toggler = document.querySelector('.mobile_toggle__input'),
    mobileNav = document.querySelector('.mobile_nav'),
    header = document.querySelector('.header'),
    navLink = document.querySelector('.header_nav_list__link');
toggler.addEventListener('change', function () {
  mobileNav.classList.toggle('open_nav');
}); // Sticky Header

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    header.classList.add('sticky');
    console.log('scroll is more then 100');
  } else {
    header.classList.remove('sticky');
  }
});