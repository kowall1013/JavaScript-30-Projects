const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, viSeconds) => total + viSeconds);

let = secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

hoursContainer.innerHTML = `<strong>${hours}</strong> hours`;
minutesContainer.innerHTML = `<strong>${mins}</strong> minutes`;
secondsContainer.innerHTML = `<strong>${secondsLeft}</strong> seconds`;
