const container = document.querySelectorAll(".container .row");

container.forEach(el=>{
    el.addEventListener('click',()=>{
        el.classList.toggle("is-active")
    })
})




