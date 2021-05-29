const hamburger = document.querySelector(".mobile__hamburger");
const menu = document.querySelector(".nav");
const hamburgerItem = document.querySelectorAll(".mobile__hamburger__item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("mobile__hamburger--active");
  menu.classList.toggle("nav--active");
  document.body.classList.toggle("--stop-scrolling");
});

const linksList = document.querySelector(".nav__links");

linksList.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__links__link")) {
    hamburger.classList.toggle("mobile__hamburger--active");
    menu.classList.toggle("nav--active");
    document.body.classList.remove("--stop-scrolling");
  }
});

document.addEventListener("scroll", () => {
  let scroll_positionY = window.scrollY;
  if (scroll_positionY > 451) {
    hamburgerItem.forEach((item) => {
      item.style.backgroundColor = "black";
    });
  } else {
    hamburgerItem.forEach((item) => {
      item.style.backgroundColor = "white";
    });
  }
});
