const menuOpen = document.querySelector(".navbar__menu-open");
const menuClose = document.querySelector(".navbar__menu-close");
// const menuIcons = document.querySelectorAll(".menu-icon");

menuOpen.addEventListener("click", (evt) => {
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", (evt) => {
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});
