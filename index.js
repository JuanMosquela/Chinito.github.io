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