import jump from './node_modules/jump.js/dist/jump.module.js'

const links = document.querySelectorAll('.navbar__list__item');
const hamburgerToggler = document.getElementById('toggle');


window.addEventListener('DOMContentLoaded', ()=>{
    const motto = document.querySelector('.motto');
    const navbar = document.querySelector('.navbar');
    const features = document.querySelectorAll('.feature');

    TweenMax.from(motto, 1, {x:100, opacity:0})
    TweenMax.from(navbar, 1, {y:-100, opacity:0, delay: .5})

    features.forEach(feature => {
        TweenMax.from(feature, 1, {scaleY:0, opacity:0, delay: 1})
    });
})

let isScrolling = false;

document.addEventListener('scroll', () => { 
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
})

    
links.forEach(element => {
    element.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            hamburgerToggler.click();
            jump(`.${element.getAttribute('target')}`, { offset: -80});
        }
        else {
            if(isScrolling) {
                element.preventDefault(); 
                jump(`.${element.getAttribute('target')}`, { offset: -80});
            }
            else
            jump(`.${element.getAttribute('target')}`, { offset: -80});
        }
        
    })
});


