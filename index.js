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
document.addEventListener('click', function(event) {
    var clickedInsideMenu = hamburgerMenu.contains(event.target);
    var clickedHamburgerBtn = hamburgerBtn.contains(event.target);
    if (!clickedInsideMenu && !clickedHamburgerBtn) {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
});
document.addEventListener('keyup', function(event) {
    var menuIsOpen = hamburgerMenu.classList.contains('show-menu');
    if (event.key === 'Escape' && menuIsOpen) {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (hamburgerMenu.contains(document.activeElement)) {
        hamburgerBtn.focus();
        }
    }
});