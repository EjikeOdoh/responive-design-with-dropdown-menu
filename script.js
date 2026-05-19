// Access the button
const featuresBtn = document.querySelector("#features")

// Add hover event listener to the button
featuresBtn.addEventListener('mouseenter', ()=> {
    // when button is hovered, change src of button to desired img
    featuresBtn.firstElementChild.src = "images/icon-arrow-up.svg"
})

featuresBtn.addEventListener('mouseleave', ()=> {
    // when button is hovered, change src of button to desired img
    featuresBtn.firstElementChild.src = "images/icon-arrow-down.svg"
})


const companyBtn = document.querySelector("#company")
const companyIcon = companyBtn.firstElementChild

companyBtn.addEventListener('mouseenter', ()=> {
     companyIcon.src = "images/icon-arrow-up.svg"
})

companyBtn.addEventListener('mouseleave', ()=> {
     companyIcon.src = "images/icon-arrow-down.svg"
})


// Components for mobile menu

const mobileMenu =  document.querySelector("#mobile-menu")
const openMenuBtn = document.querySelector("#open-menu")
const closeMenuBtn = document.querySelector("#close-menu")

openMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.remove('hidden')
})

closeMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('hidden')
})