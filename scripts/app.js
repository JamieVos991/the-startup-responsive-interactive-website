let hamburgerKnop = document.querySelector('#hamburgerKnop');
let hamburgerCloseKnop = document.querySelector('ul h1')
let hamburgerMenu = document.querySelector('#hamburgerMenu')

hamburgerKnop.addEventListener('click', function() {
    hamburgerMenu.classList.add("show");
})

hamburgerCloseKnop.addEventListener('click', function() {
    hamburgerMenu.classList.remove("show")
})