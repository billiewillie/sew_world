function headerMenuMobile(openedMenu, openButton, closeButton, bluredSelecor) {
  
  const mobileOpen = document.querySelector(openButton),
         menuMobile = document.querySelector(openedMenu),
         mobileClose = document.querySelector(closeButton),
         blurBg = document.querySelector(bluredSelecor);

   mobileOpen.addEventListener("click", function (evt) { 
     evt.preventDefault();

     blurBg.classList.add("show");
     menuMobile.classList.add("show");
     mobileOpen.classList.add("hide"); 
     mobileClose.classList.add("show");

     document.body.style.overflow = 'hidden';
   });
 
   mobileClose.addEventListener("click", function (evt) { 
     evt.preventDefault();
     blurBg.classList.remove("show");
     mobileClose.classList.remove("show");
     mobileOpen.classList.remove("hide");
     menuMobile.classList.remove("show"); 

     document.body.style.overflow = '';
   });
}

export default headerMenuMobile;