/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
    navToggle = document.getElementById("nav-toggle");
    navClose = document.getElementById("nav-close");

// MenuShow
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    })
}

// MenuHide
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav--link");

const LinkAction = () => {
    const NavMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach((e) => {
    e.addEventListener("click", LinkAction);
})


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/
gsap.from(".home--img-2", 1.2, { opacity: 0, y: 200, delay: .1 })
gsap.from(".home--img-3", 1.2, { opacity: 0, y: 200, delay: .5 })
gsap.from(".home--data", 1.2, { opacity: 0, y: -60, delay: 1 })
gsap.from(".home-bird-1", 1.2, { opacity: 0, x: -80, delay: 1.1 })
gsap.from(".home-bird-2", 1.2, { opacity: 0, x: 80, delay: 1.2 })
gsap.from(".home--img-1", 1.2, { opacity: 0, y: 200, delay: 1.2 })
gsap.from(".home--img-4", 1.2, { opacity: 0, x: 200, delay: 1.3 })
