const mobMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector(".menu-btn");
const openMenu = document.querySelector('.js-open-menu');
const noScroll = document.querySelector('body')

openMenu.addEventListener('click', ()=> {
mobMenu.hidden = false;
noScroll.classList.add('no-scroll');
})

closeMenu.addEventListener('click', ()=>{
    mobMenu.hidden = true;
    noScroll.classList.remove('no-scroll');
})

