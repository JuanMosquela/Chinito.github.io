const $question = document.querySelectorAll(".container .container-question");
const menu = document.querySelector('.menu');
const latNav = document.getElementById('lat-nav');
const header = document.querySelector(".header"); 

$question.forEach(el => {
    el.addEventListener('click', ()=>{
        el.classList.toggle('is-active');        
    })
    
});

window.addEventListener('scroll', ()=>{
           
    header.classList.toggle('sticky', window.scrollY > 0);
    if(latNav.classList.contains('open-close')){
        header.classList.add('sticky')

    } 
    
    
    

})

menu.addEventListener('click', () => {
    latNav.classList.toggle('open-close');
    
    if(latNav.classList.contains('open-close') ){
        header.classList.add('sticky')
    }
    menu.classList.toggle('dark-theme' );
    

})

