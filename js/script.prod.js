"use strict";var toggler=document.querySelector(".mobile_toggle"),header=document.querySelector(".header"),navLink=document.querySelector(".header_nav_list__link");toggler.addEventListener("click",function(){header.classList.contains("open_nav")?header.classList.remove("open_nav"):header.classList.add("open_nav")}),window.addEventListener("scroll",function(){200<window.scrollY?header.classList.add("sticky"):header.classList.remove("sticky")});var inputField=document.querySelectorAll(".form_input__field");inputField.forEach(function(n){n.addEventListener("focusout",function(e){var t=e.target.classList;0<n.value.length?t.add("has_text"):t.remove("has_text")})});