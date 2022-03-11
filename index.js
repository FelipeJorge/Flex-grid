const botaoMenu = document.querySelector('.menu')
const menu = document.querySelector ('.menuLateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menulateralAtivo')
})