
  document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.querySelector(".nav-button");
    const nav = document.querySelector(".nav");
    const menuLinks = document.querySelectorAll(".nav a, .dropdown-content a");

    const closeMenu = () => {
      nav.classList.remove("show");
      navButton.classList.remove("change");
    };

    if (navButton && nav) {
      navButton.addEventListener("click", () => {
        navButton.classList.toggle("change");
        nav.classList.toggle("show");
      });
    }

    // Закрытие меню при клике по любому пункту
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
      });
    });
  });

