const body = document.body
const navbar = document.createElement("nav")
const container = document.createElement("container")

navbar.classList.add("navbar")
body.appendChild(navbar)

container.classList.add("container")
body.appendChild(container)


const pageSections = {
    homepage: document.createElement("div"),
    aboutMe: document.createElement("div"),
    portfolio: document.createElement("div"),
    contact: document.createElement("div")
}

Object.keys(pageSections).forEach(pageSection => {
    const element = pageSections[pageSection]
    element.classList.add(`${pageSection}`)
    body.appendChild(element)
})




/*  PROBLEM:
    the script tag is above all the HTML 
    I need the <script> tag to be at the bottom of the HTML
*/













//OLD NOTES AND CODE

// navbar.classList.add("navbar")
// body.appendChild(navbar)

// container.classList.add("container")
// body.appendChild(container)

// pageSections.homepage.classList.add("homepage")
// container.appendChild(pageSections.homepage)

// pageSections.aboutMe.classList.add("about-me")
// container.appendChild(pageSections.aboutMe)

// pageSections.portfolio.classList.add("portfolio")
// container.appendChild(pageSections.portfolio)

// pageSections.contact.classList.add("contact")
// container.appendChild(pageSections.contact)


/*
create a function that loops through each object 
for each object retrieve the objects name as a string and add it as a class to the element
container.appendChild(pageSections.[i]) or container.appendChild(pageSections.pageSection)
*/

// Object.keys(pageSections).forEach(pageSection => {
//     console.log(pageSections[pageSection])
// })

// Object.keys(pageSections).forEach(pageSection => {
//     console.log(`${pageSection}`);
// });



// const homepage = document.createElement("div")
// const aboutMe = document.createElement("div")    
// const portfolio = document.createElement("div")
// const contact = document.createElement("div")

// navbar.classList.add("navbar")
// body.appendChild(navbar)

// container.classList.add("container")
// body.appendChild(container)

// homepage.classList.add("homepage")
// container.appendChild(homepage)

// aboutMe.classList.add("about-me")
// container.appendChild(aboutMe)

// portfolio.classList.add("portfolio")
// container.appendChild(portfolio)

// contact.classList.add("contact")
// container.appendChild(contact)