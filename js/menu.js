
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  
    
  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
  })

  menuBtnRef.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle("menu-open");
   
  }    
})();


