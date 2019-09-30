import { TweenMax } from "gsap";
import jump from 'jump.js'


const links = document.querySelectorAll('.navbar__list__item','.navbar__logo');
const logo = document.querySelector('.navbar__logo');
const infoSection = document.querySelector('.info__container');

const hamburgerToggler = document.getElementById('toggle');

window.addEventListener('DOMContentLoaded', ()=>{
    const motto = document.querySelector('.motto');
    const navbar = document.querySelector('.navbar');
    const features = document.querySelectorAll('.feature');
    

    TweenMax.from(motto, 1, {x:100, opacity:0})
    TweenMax.from(navbar, 1, {y:-100, opacity:0, delay: .5})
    features.forEach(feature => {
        TweenMax.from(feature, .7, {scaleY:0, opacity:0, delay: 1})
    });
    TweenMax.set(infoSection,{y:-50,opacity:0}) 
}) 


const infoSectionObserver = new IntersectionObserver(function(entries, InfoSectionObserver) {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
                   TweenMax.to(infoSection, 1.5, {y: 0, opacity:1}) 
                   infoSectionObserver.unobserve(infoSection);
        }

      
    })
}, {rootMargin: "0px 0px -200px 0px"});


infoSectionObserver.observe(infoSection);



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
