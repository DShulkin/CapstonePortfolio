const hamburger = document.querySelector(".navbar-toggler")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach( nL => nL
    .addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))

    // window.onscroll = function() {
    //     const navbar = document.querySelector('.navbar');
    //     if (window.scrollY >= navbar.offsetTop) {
    //         navbar.classList.add('sticky');
    //     } else {
    //         navbar.classList.remove('sticky');
    //     }
    // };
