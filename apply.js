document.addEventListener("DOMContentLoaded",function(){
 const toggle = document.getElementById('toggle')
 const nav = document.querySelector('.nav-link')
 const links = document.querySelectorAll('nav li')
 toggle.addEventListener('click', function(){
     nav.classList.toggle('active')
 })   
 
    links.forEach((link) =>{
      link.addEventListener('click', function(){
        nav.classList.remove('active')
      })
    })

})