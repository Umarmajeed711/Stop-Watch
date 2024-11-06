let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;

const display = document.getElementById("display");

const startStopBtn = document.getElementById("startStopBtn");

const resetBtn = document.getElementById("resetBtn");

function formatTime() {
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    display.textContent = formatTime();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    stopStopwatch();
    startStopBtn.textContent = "Start";
    display.className = "display";
  } else {
    startStopwatch();
    startStopBtn.textContent = "Stop";
    display.className = " newDisplay";
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  display.textContent = "00:00";
  display.className = "display";
  startStopBtn.textContent = "Start";
  isRunning = false;
});
