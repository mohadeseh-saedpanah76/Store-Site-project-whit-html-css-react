const mobileMenuBtn =document.querySelector('.hamburger__button')
const mobileMenu = document.querySelector('.menu__container')
const mobileCloseBtn = document.querySelector('.menu__icon-close')
const navLink = document.querySelectorAll('.nav__link')
const menuLink = document.querySelectorAll('.menu__link')


/*============ Active Link nav ============ */

function activeLinkNav (){
    navLink.forEach((item)=>{
        item.classList.remove('active-link-nav')
    })

    this.classList.add('active-link-nav')
}

navLink.forEach((item)=>{
    item.addEventListener('click' , activeLinkNav)
})

/*============ Active link menu ============ */

function activeLinkMenu (){
    menuLink.forEach((item)=>{
        item.classList.remove('active-link-menu')
    })
    this.classList.add('active-link-menu')
}

menuLink.forEach((item)=>{
    item.addEventListener('click',activeLinkMenu)
})

/*============  Mobile menu ============ */
// open menu
mobileMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('show__mobile__menu')
})

// close menu
mobileCloseBtn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('show__mobile__menu')
})

