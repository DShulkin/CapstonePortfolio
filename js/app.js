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


    // document.querySelectorAll(".nav-link").onclick = function() {
    //     hamburger.classList.remove("active")
    //     navMenu.classList.remove("active")
    // }​​
    






// const homepage = document.querySelector('.homepage')
// const aboutMe = document.querySelector('.about-me')
// const portfolio = document.querySelector('.portfolio')
// const contact = document.querySelector('.contact')

// const body = document.body
// const navbar = document.createElement("nav")
// const container = document.createElement("container")

// navbar.classList.add("navbar")
// body.appendChild(navbar)

// container.classList.add("container")
// body.appendChild(container)

// const pageSections = {
//     homepage: document.createElement("div"),
//     aboutMe: document.createElement("div"),
//     portfolio: document.createElement("div"),
//     contact: document.createElement("div")
// }

// Object.keys(pageSections).forEach(pageSection => {
//     const element = pageSections[pageSection]
//     element.classList.add(`${pageSection}`)
//     body.appendChild(element)
// })
