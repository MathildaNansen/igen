document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");
  
    burgerMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
  
    window.addEventListener("click", (event) => {
        if (!burgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
  });
  