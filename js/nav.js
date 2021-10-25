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
        console.log('scroll is more then 100')
    } else {
        header.classList.remove('sticky')
    }
})