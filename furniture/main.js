

document.addEventListener('DOMContentLoaded', () => {
    
    const burgerBtn = document.getElementById("burger-btn");
    const headerMenu = document.querySelector(".header-menu");

    if(burgerBtn && headerMenu){
        burgerBtn.addEventListener("click", ()=> {
            headerMenu.classList.toggle('open');
        })
    }

});
