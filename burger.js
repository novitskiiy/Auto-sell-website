
  document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.querySelector(".nav-button");
    const nav = document.querySelector(".nav");
    const menuLinks = document.querySelectorAll(".nav > a, .dropdown-content a");
    const servicesLink = document.querySelector(".dropdown > a");
    const dropdownContent = document.querySelector(".dropdown-content");

    const closeMenu = () => {
      nav.classList.remove("show");
      navButton.classList.remove("change");
      dropdownContent.classList.remove("open"); // закрываем подменю
    };

    if (navButton && nav) {
      navButton.addEventListener("click", () => {
        navButton.classList.toggle("change");
        nav.classList.toggle("show");
      });
    }

    // Закрытие меню при клике по пунктам (кроме "Послуги")
    menuLinks.forEach(link => {
      if (link !== servicesLink) {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            closeMenu();
          }
        });
      }
    });

    // Отдельная логика для "Послуги"
    if (servicesLink) {
      servicesLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // отключаем переход по якорю
          dropdownContent.classList.toggle("open");
        }
      });
    }
  });
