
// REFERENCIAS HTML

const header           = document.querySelector('.header');
const header__logo             = document.querySelector('.header__logo');
const header__hamburguesa        = document.querySelector('.header__hamburguesa');
const header__btn         = document.querySelector( '.header__btn');
const nav__responsive__close        = document.querySelector('.nav__responsive__close');
const header__links       = Array.from(document.querySelectorAll('.header__link'));
const nav__responsive__link            = Array.from(document.querySelectorAll('.nav__responsive__link'));
const menu_desplegable = document.querySelector('.responsive__menu');

//EVENTOS

addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
	
    if (scrollTop > 10) {
        header.classList.add('cambia__color', 'border__bottom--red');
        header__logo.classList.add('cambia__color');
        header__hamburguesa.classList.add('cambia__color'); 


        header__links.forEach(link => {
            link.classList.add('cambia__color')
        });
        

    }else {
        header.classList.remove('cambia__color', 'border__bottom--red');
        header__logo.classList.remove('cambia__color');
        header__hamburguesa.classList.remove('cambia__color');


        header__links.forEach( link => {
            link.classList.remove('cambia__color');
        })
    }
    
});

// Menú hamburguesa
header__btn.addEventListener('click', () => {
    menu_desplegable.classList.remove('ocultar_menu');
    menu_desplegable.classList.add('mostrar_menu');
})


// Botón cerrar Menú
nav__responsive__close.addEventListener('click', () => {
    menu_desplegable.classList.remove('mostrar_menu');
    menu_desplegable.classList.add('ocultar_menu')
})

// links y cierre del Menú
nav__responsive__link.forEach(link => {
    link.addEventListener('click', () => {
        nav__responsive__link.classList.add('ocultar_menu')
    })
})
