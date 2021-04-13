const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;
const speedOfMoveElement = 2;

function getElement(e) {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function leaveElement(e) {
  isDown = false;
  slider.classList.remove("active");
}

function mouseUp() {
  isDown = false;
  slider.classList.remove("active");
}

function moveElement(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * speedOfMoveElement;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener("mousedown", getElement);
slider.addEventListener("mouseleave", leaveElement);
slider.addEventListener("mouseup", mouseUp);
slider.addEventListener("mousemove", moveElement);
