
// REFERENCIAS HTML

const header                 = document.querySelector('.header');
const header__logo           = document.querySelector('.header__logo');
const header__bars           = document.querySelector('.header__bars');
const header__btn            = document.querySelector( '.header__btn');
const nav__responsive__close = document.querySelector('.nav__responsive__close');
const header__links          = Array.from(document.querySelectorAll('.header__link'));
const nav__responsive__link  = Array.from(document.querySelectorAll('.nav__responsive__link'));
const menu_desplegable       = document.querySelector('.responsive__menu');

//EVENTOS

addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
	
    if (scrollTop > 10) {
        header.classList.add('cambia__color', 'border__bottom--red');
        header__logo.classList.add('cambia__color');
        header__bars.classList.add('cambia__color'); 


        header__links.forEach(link => {
            link.classList.add('cambia__color')
        });
        

    }else {
        header.classList.remove('cambia__color', 'border__bottom--red');
        header__logo.classList.remove('cambia__color');
        header__bars.classList.remove('cambia__color');


        header__links.forEach( link => {
            link.classList.remove('cambia__color');
        })
    }
    
});

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
