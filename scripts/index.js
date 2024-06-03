const themeBtn = document.getElementById('theme-btn')

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark")
})
const menuBtn = document.getElementById('menu')
const ulMenu = document.getElementById('ulMenu')

menuBtn.addEventListener('click', () => {
    console.log('click')
    ulMenu.classList.toggle("hide")
    console.log(ulMenu)
})