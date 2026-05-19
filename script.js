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