'use strict';

const CTBtn = document.querySelector(".change-theme");

CTBtn.addEventListener('click', function() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
});