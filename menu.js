const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNavigation = document.querySelector(".site-nav");
const menuLabel = menuToggle?.querySelector(".mobile-menu-label");

if (menuToggle && mainNavigation) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    mainNavigation.classList.toggle("is-open", isOpen);
    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Close" : "Menu";
    }
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mainNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
}
