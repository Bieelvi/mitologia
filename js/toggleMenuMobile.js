const linksMenu = document.getElementById('links');
const menuHamburguer = document.getElementById('menu-hamburguer');
const telaInteira = document;

telaInteira.addEventListener("click", (e) => {
    if (!linksMenu.contains(e.target)) {
        if (menuHamburguer.contains(e.target)) {
            toggle(linksMenu, 'displayFlex');
        } else {
            linksMenu.classList.remove('displayFlex');
        }                
    }       
});

function toggle(doomElement, className) {
    if (doomElement.classList.contains(className)) {
        linksMenu.classList.remove(className);
    } else {
        linksMenu.classList.add(className);
    }
} 