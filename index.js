const questions = document.querySelectorAll(".container-question");
const menu = document.querySelector('.menu');
const latNav = document.getElementById('lat-nav');
const header = document.querySelector(".header");
const icons = document.querySelectorAll('.question i');






questions.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

window.addEventListener('scroll', ()=>{
           
    header.classList.toggle('sticky', window.scrollY > 0);
    if(latNav.classList.contains('open-close')){
        header.classList.add('sticky')
    }     

})

menu.addEventListener('click', () => {
    latNav.classList.toggle('open-close');
    
    if(latNav.classList.contains('open-close')){
        header.classList.add('sticky')
    }
    
    

})

