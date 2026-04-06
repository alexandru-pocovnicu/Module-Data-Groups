let intervalId;
let isPaused;
let remainingSeconds = 0;
function setAlarm() {
  isPaused = false;
  const pauseButton = document.getElementById("pause-button");
  if (pauseButton) {
    pauseButton.removeAttribute("id");
    pauseButton.classList.add("unpause-alarm");
    pauseButton.addEventListener("click", pauseCountDown);
  }

  const alarmSetEl = document.getElementById("alarmSet");
  const timeRemainingEl = document.getElementById("timeRemaining");
  let totalSeconds = +alarmSetEl.value;
  remainingSeconds = totalSeconds;

  if (
    totalSeconds <= 0 ||
    isNaN(totalSeconds) ||
    !Number.isInteger(totalSeconds)
  ) {
    alarmSetEl.value = "";
    return;
  }
  cleanInitialState();

  function updateCountDown() {
    remainingSeconds = totalSeconds;
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60;

    let paddedSeconds = seconds.toString().padStart(2, "0");
    let paddedMinutes = minutes.toString().padStart(2, "0");
    timeRemainingEl.innerHTML = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;

    if (totalSeconds <= 0) {
      document.body.classList.add("finish-countdown");

      playAlarm();
      clearInterval(intervalId);
      return;
    }

    totalSeconds -= 1;
  }

  updateCountDown();
  intervalId = setInterval(updateCountDown, 1000);
}

function pauseCountDown(e) {
  if (isPaused === false) {
    clearInterval(intervalId);
    e.target.textContent = "unpause";
    isPaused = true;
  } else {
    e.target.textContent = "Pause";
    isPaused = false;
    intervalId = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        return;
      }
      remainingSeconds -= 1;
      const seconds = remainingSeconds % 60;
      const minutes = (remainingSeconds - seconds) / 60;
      const paddedSeconds = seconds.toString().padStart(2, "0");
      const paddedMinutes = minutes.toString().padStart(2, "0");
      document.getElementById("timeRemaining").innerHTML =
        `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;

      if (remainingSeconds <= 0) {
        document.body.classList.add("finish-countdown");
        playAlarm();
        clearInterval(intervalId);
      }
    }, 1000);
  }
}

function cleanInitialState() {
  clearInterval(intervalId);
  document.body.classList.remove("finish-countdown");
  document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:00";
  document.getElementById("alarmSet").value = null;
  pauseAlarm();
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
