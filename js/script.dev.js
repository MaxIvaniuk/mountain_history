// @@include('nav.js');
'use strict'; // Burger toggle

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
  } else {
    header.classList.remove('sticky');
  }
});
var inputField = document.querySelectorAll('.form_input__field');
inputField.forEach(function (item) {
  item.addEventListener('focusout', function (event) {
    var inputClass = event.target.classList;
    var inputTextLength = item.value.length;

    if (inputTextLength > 0) {
      inputClass.add('has_text');
    } else {
      inputClass.remove('has_text');
    }
  });
});