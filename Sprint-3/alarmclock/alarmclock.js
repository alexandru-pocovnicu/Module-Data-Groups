let intervalId;
let isPaused;
let remainingSeconds = 0;
function setAlarm() {
  
  const pauseButton = document.getElementById("pause-button");
    pauseButton.textContent = "Pause";
    pauseButton.removeEventListener("click",pauseCountDown)
    pauseButton.addEventListener("click", pauseCountDown);

  const alarmSetEl = document.getElementById("alarmSet");
  const timeRemainingEl = document.getElementById("timeRemaining");
  let totalSeconds = +alarmSetEl.value;

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
    updateDisplayedTime(remainingSeconds);

    if (totalSeconds <= 0) {
      finishCountDown();
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
    e.target.textContent = "Unpause";
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
      updateDisplayedTime(remainingSeconds);

      if (remainingSeconds <= 0) {
        finishCountDown();
      }
    }, 1000);
  }
}

function cleanInitialState() {
  isPaused = false;
  clearInterval(intervalId);
  document.body.classList.remove("finish-countdown");
  updateDisplayedTime(0)
  document.getElementById("alarmSet").value = null;
  pauseAlarm();
}

function updateDisplayedTime(totalSeconds) {
  let seconds = totalSeconds % 60;
  let minutes = (totalSeconds - seconds) / 60;

  let paddedSeconds = seconds.toString().padStart(2, "0");
  let paddedMinutes = minutes.toString().padStart(2, "0");
  document.getElementById("timeRemaining").innerHTML =
    `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function finishCountDown() {
  document.body.classList.add("finish-countdown");
  playAlarm();
  clearInterval(intervalId);
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
