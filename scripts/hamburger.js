const hamburger = document.querySelector(".mobile__hamburger");
const menu = document.querySelector(".nav");
const hamburgerItem = document.querySelectorAll(".mobile__hamburger__item");

const changeBackgroundHandler = (color) => {
  hamburgerItem.forEach((item) => {
    item.style.backgroundColor = color;
  });
};

const isClickedHamburger = () => {
  let scroll_positionY = window.scrollY;
  if (menu.classList.value === "nav nav--active") {
    changeBackgroundHandler("white");
  } else if (menu.classList.value === "nav" && scroll_positionY > 451) {
    changeBackgroundHandler("black");
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("mobile__hamburger--active");
  menu.classList.toggle("nav--active");
  document.body.classList.toggle("--stop-scrolling");
  isClickedHamburger();
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
    changeBackgroundHandler("black");
  } else {
    changeBackgroundHandler("white");
  }
});
