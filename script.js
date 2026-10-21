
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const year = document.getElementById("year");

// Display the current year
if (year) {
  year.textContent = new Date().getFullYear();
}

// Toggle the mobile navigation menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
