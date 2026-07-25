// ============================================================
// PULSE Band — site script
// The only JavaScript on this site: it makes the three-line
// menu button open and close the navigation on phones.
// Everything else works without JavaScript at all.
// ============================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  // Tells screen readers whether the menu is open
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close the menu after tapping any link in it (so it doesn't
// stay covering the page when you jump to a section)
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
