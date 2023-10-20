// console.log('Петя лочек')

document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.burger-menu')
    const navigationEl = document.querySelector('.navigation')

    burgerMenu.addEventListener('click', () => {

        navigationEl.style.display = 'block'
        burgerMenu.style.display = 'none'

    })

})