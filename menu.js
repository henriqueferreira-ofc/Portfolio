let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// menu.js

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('header nav.menu-desktop a');
    const menuMobileLinks = document.querySelectorAll('.menu-mobile nav a');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.querySelector('.btn-fechar');
  
    menuLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        scrollToElement(targetId);
      });
    });
  
    menuMobileLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        scrollToElement(targetId);
        closeMenu();
      });
    });
  
    btnMenu.addEventListener("click", toggleMenu);
    overlayMenu.addEventListener("click", closeMenu);
    btnFechar.addEventListener("click", closeMenu);
  
    function toggleMenu() {
      menuMobile.classList.toggle('active');
      overlayMenu.classList.toggle('active');
    }
  
    function closeMenu() {
      menuMobile.classList.remove('active');
      overlayMenu.classList.remove('active');
    }
  
    function scrollToElement(targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const topOffset = targetElement.offsetTop;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth"
        });
      }
    }
  });
  
  