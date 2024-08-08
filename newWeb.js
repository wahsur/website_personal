const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_content .header_btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .about_btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".skill_card", {
  ...scrollRevealOption,
  interval: 500,
});

// education container
ScrollReveal().reveal(".education_card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio_card", {
  duration: 1000,
  interval: 500,
});
