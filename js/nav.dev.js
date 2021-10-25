"use strict";

// Burger toggle
var toggler = document.querySelector('.mobile_toggle');
var header = document.querySelector('.header');
var navLink = document.querySelector('.header_nav_list__link');
toggler.addEventListener('click', function () {
  if (header.classList.contains('open_nav')) {
    header.classList.remove('open_nav');
  } else {
    header.classList.add('open_nav');
  }
}); // navLink.addEventListener('click', () => {
//     if (header.classList.contains('open_nav')) {
//         header.classList.remove('open_nav')
//     }
// })
// Sticky Header

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    header.classList.add('sticky');
    console.log('scroll is more then 100');
  } else {
    header.classList.remove('sticky');
  }
});