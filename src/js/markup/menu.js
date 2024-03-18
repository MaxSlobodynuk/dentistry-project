const mobMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector(".menu-btn");
const openMenu = document.querySelector('.js-open-menu');
const noScroll = document.querySelector('body');


openMenu.addEventListener('click', onOpen);
closeMenu.addEventListener('click', onClose);

function onOpen(){
    window.addEventListener('keydown', keyEsc);
    mobMenu.classList.remove("is-hidden");
    noScroll.classList.add('no-scroll');
    mobMenu.classList.add('is-transformMenu');
}

function onClose(){
    window.removeEventListener('keydown', keyEsc);
    mobMenu.classList.add("is-hidden");
    noScroll.classList.remove('no-scroll');
    mobMenu.classList.remove('is-transformMenu');
}


function keyEsc (e){
    const ESC = "Escape";
    if(e.code === ESC ){
        onClose();
    }
}


// const main = document.querySelector('main');

// console.log(main.children);

// // Перетворення колекції на масив
// const childrenArray = Array.from(main.children);
// console.log(childrenArray);

// // Використання методу map() для обробки кожного елемента
// const newArr = childrenArray.filter(child => child.classList.contains('consultation'));
// console.log(newArr);

// if(window.screen.width > 760){
//   main.appendChild(...newArr);


// }