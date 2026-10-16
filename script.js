const gallery = document.querySelector(".gallery");

window.addEventListener("keydown", (event) => {
  const scrollStep = 320; //

  if (event.key === "ArrowRight") {
    gallery.scrollBy({ left: scrollStep, behavior: "smooth" });
  } else if (event.key === "ArrowLeft") {
    gallery.scrollBy({ left: -scrollStep, behavior: "smooth" });
  }
});

const inputRef = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

renderBtn.addEventListener("click", () => {
  const amount = Number(inputRef.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();

    elements.push(div);
    size += 10;
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  inputRef.value = "";
}
