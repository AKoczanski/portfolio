let i = 0;
const text = "adrian koczański";
const speed = 100;

const headerTitle = document.querySelector(".home__text__name");

const typer = () => {
  if (i < text.length) {
    headerTitle.innerHTML += text.charAt(i);
    i++;
    setTimeout(typer, speed);
  }
};

typer();
