import './utils/modals';
import './utils/slider';
import './utils/tabs';
import './utils/accordion';

let navbarAnchor = document.querySelectorAll('.navbar__nav a');
let burgerMenu = document.getElementById('burger-btn');
let menuContainer = document.getElementById('navbar__wrap');

navbarAnchor?.forEach(item => {
    item.addEventListener('click', function(){
        burgerMenu.classList.remove('active');
        menuContainer.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
})

burgerMenu?.addEventListener('click', function(event){
    this.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});