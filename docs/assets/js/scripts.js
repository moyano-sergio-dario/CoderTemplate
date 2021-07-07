
// REFERENCIAS HTML

const header                 = document.querySelector('.header');
const header__logo           = document.querySelector('.header__logo');
const header__bars           = document.querySelector('.header__bars');
const header__btn            = document.querySelector( '.header__btn');
const nav__responsive__close = document.querySelector('.nav__responsive__close');
const header__links          = Array.from(document.querySelectorAll('.header__link'));
const nav__responsive__link  = Array.from(document.querySelectorAll('.nav__responsive__link'));
const menu_desplegable       = document.querySelector('.responsive__menu');


const elementosHeader = [
  header,
  header__logo,
  header__bars,
];



function pintar(elementos) {
    elementos.forEach((elem) => {
        elem.classList.add('cambia__color');
    })
}
function despintar (elementos) {
    elementos.forEach(elem => {
        elem.classList.remove('cambia__color')
    })
}

function borde(elemento, estado) {
    if (estado){
        elemento.classList.add('border__bottom--red');
    }else {
        elemento.classList.remove('border__bottom--red');
    }
}

addEventListener('scroll', () => {
    const miScroll = window.scrollY;

    if (miScroll > 10) {
        pintar(elementosHeader);
        pintar(header__links);
        borde(header, true);

    }else {
        despintar(elementosHeader);
        despintar(header__links);
        borde(header, false);
    }
})

// FUNCIONES
function mostrar_ocultar_menu() {
    menu_desplegable.classList.toggle('ocultar_menu');
}
//EVENTOS//

//APERTURA/CIERRE DEL MENÚ
header__btn.addEventListener('click', mostrar_ocultar_menu);

//CIERRE DEL MENÚ MEDIANTE EL BOTÓN X
nav__responsive__close.addEventListener('click', mostrar_ocultar_menu);

//CIERRE DEL MENÚ LUEGO DE HACER CLICK EN UN ENLACE DEL MISMO.
nav__responsive__link.forEach(link => {
    link.addEventListener('click', mostrar_ocultar_menu)
})
