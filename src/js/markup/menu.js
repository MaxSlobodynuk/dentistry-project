const mobMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector(".menu-btn");
const openMenu = document.querySelector('.js-open-menu');

openMenu.addEventListener('click', ()=> {
mobMenu.hidden = false;
})

closeMenu.addEventListener('click', ()=>{
    mobMenu.hidden = true;
})