const header = document.querySelector(".nav");
const anchorSelector = 'a[href^="#"]';
const anchorList = document.querySelectorAll(anchorSelector);

document.addEventListener("scroll", () => {
  let scroll_positionY = window.scrollY;
  let screenWidth = screen.width;
  if (scroll_positionY > 683) {
    header.style.backgroundColor = "black";
  } else if (screenWidth < 1900 && scroll_positionY > 400) {
    header.style.backgroundColor = "black";
  } else if (screenWidth > 1360) {
    header.style.backgroundColor = "transparent";
  }
});

anchorList.forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();
    let destination = document.querySelector(this.hash);
    destination.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
});
