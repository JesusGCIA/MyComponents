const menu = document.querySelector('.menu');
menu.addEventListener('click', e =>{
    menu.classList.toggle('open');
    
});

var menuToggle = document.querySelector(".menu--tgl");
menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle('active');
})
