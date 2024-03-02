const menuBtn = document.querySelector('[data-hamburger]');
const mainNav = document.querySelector('[data-main-nav]');
const navItems = document.querySelectorAll('[data-nav-ani]');
const body = document.querySelector('body');

const toggleMenu = () => {
    if (menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
        mainNav.classList.remove('main__nav--active');


        navItems.forEach(item => item.style.animation = ``);

    } else {
        menuBtn.classList.add('open');
        mainNav.classList.add('main__nav--active');


        navItems.forEach((item, idx) => {
            item.style.animation = `nav-ani 450ms ease-in forwards`;
            item.style.animationDelay = `${idx * 200}ms`;
        })
    }
}
menuBtn.addEventListener('click', toggleMenu);