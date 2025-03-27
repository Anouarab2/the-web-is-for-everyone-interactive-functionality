let hamMenu = document.querySelector('.ham-button')
let closeButton = document.querySelector('.close-button')
let hamItems = document.querySelector('.side-bar')


hamMenu.addEventListener('click', changeMenu)
closeButton.addEventListener('click', changeMenu)

function changeMenu(){
    hamItems.classList.toggle('active')
}