// Access the button
const featuresBtn = document.querySelector("#features")

// Access the icon inside the button
const image = featuresBtn.firstElementChild
console.dir(image)

// Add hover event listener to the button
featuresBtn.addEventListener('mouseenter', ()=> {
    // when button is hovered, change src of button to desired img
    image.src = "images/icon-arrow-up.svg"
})

featuresBtn.addEventListener('mouseleave', ()=> {
    // when button is hovered, change src of button to desired img
    image.src = "images/icon-arrow-down.svg"
})