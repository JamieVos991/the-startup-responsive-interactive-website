let hamburgerKnop = document.querySelector('#hamburgerKnop');
let hamburgerSluitKnop = document.querySelector('#hamburgerSluitKnop');
let hamburgerMenu = document.querySelector('#hamburgerMenu');

hamburgerKnop.addEventListener('click', function() {
    hamburgerMenu.classList.add("show");
})

hamburgerSluitKnop.addEventListener('click', function() {
    hamburgerMenu.classList.remove("show")
})