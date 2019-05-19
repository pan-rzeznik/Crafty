let testimonialContent = document.querySelector('.content');
let testimonialsAuthor = document.querySelector('.author');
let circle = document.querySelectorAll('.circle');

const testimonials = [{
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "John Doe - UX Designer"
},
{
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et fugiat molestiae ut vitae labore vel deserunt necessitatibus ipsam velit dolor! Amet consectetur adipisicing elit. Et fugiat molestiae ut vitae labore vel deserunt necessitatibus",
    author: "John David - Developer"
},
{
    content: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.",
    author: "Jane Eva - SEO Expert"
},

]

function showTestimonials(n){
    testimonialContent.textContent = testimonials[n].content;
    testimonialsAuthor.textContent = testimonials[n].author;
}

let ar = Array.from(circle);

ar.forEach(element => {

    element.addEventListener('click', () => {
        showTestimonials(ar.indexOf(element))
        element.classList.toggle("circleActive");
    })

  
});