var hamburgerMenu = document.querySelector('.hamburger-menu');
var hamburgerBtn = document.querySelector('.hamburger-btn');
hamburgerBtn.addEventListener('click', function() {
    var menuIsOpen = hamburgerMenu.classList.contains('show-menu');
    if (menuIsOpen) {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    } else {
        hamburgerMenu.classList.add('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
});