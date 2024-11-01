
/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose  = document.getElementById("nav-close");

    if(navToggle){
         navToggle.addEventListener("click",  () =>{
            navmenu.classList.add("show-menu")
        })

    }

    if(navClose){
        navClose.addEventListener("click", () => {
            navmenu.classList.remove("show-menu")
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
   // Adicione uma classe se o deslocamento inferior for maior que 50 da janela de visualização
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/