// @@include('nav.js');
'use strict'

// Burger toggle
let toggler = document.querySelector('.mobile_toggle');
let header = document.querySelector('.header');
let navLink = document.querySelector('.header_nav_list__link');

toggler.addEventListener('click', () => {
    if (header.classList.contains('open_nav')) {
        header.classList.remove('open_nav')
    } else {
        header.classList.add('open_nav')
    }
})

// navLink.addEventListener('click', () => {
//     if (header.classList.contains('open_nav')) {
//         header.classList.remove('open_nav')
//     }
// })

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})


const inputField = document.querySelectorAll('.form_input__field');


inputField.forEach((item) => {
    
    item.addEventListener('focusout', (event) => {
        let inputClass = event.target.classList;
        let inputTextLength = item.value.length;
        
        if(inputTextLength > 0) {
            inputClass.add('has_text')
        } else {
            inputClass.remove('has_text')
        }
    })
})
