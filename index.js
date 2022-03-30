const $question = document.querySelectorAll(".container .container-question");

$question.forEach(el => {
    el.addEventListener('click', ()=>{
        el.classList.toggle('is-active');        
    })
    
});

window.addEventListener('scroll', ()=>{
    const header = document.querySelector(".header");
    header.classList.toggle('sticky', window.scrollY > 0)
})


var swiper = new Swiper(".swiper", {
    
    grabCursor: true,
    loop:true,
      
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, 
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },   
    
});