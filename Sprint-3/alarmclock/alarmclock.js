let intervalId;
function setAlarm() {
  const pauseButton = document.getElementById("pause-button");
  pauseButton.removeAttribute("id");
  pauseButton.classList.add("unpause-alarm");
  pauseButton.addEventListener("click", pauseCountDown);

  const alarmSetEl = document.getElementById("alarmSet");
  const timeRemainingEl = document.getElementById("timeRemaining");

  let totalSeconds = +alarmSetEl.value;
  if (
    totalSeconds <= 0 ||
    isNaN(totalSeconds) ||
    !Number.isInteger(totalSeconds)
  ) {
    alarmSetEl.value = null;
    return;
  }
  cleanInitialState();

  function updateCountDown() {
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60;

    let paddedSeconds = seconds.toString().padStart(2, "0");
    let paddedMinutes = minutes.toString().padStart(2, "0");
    timeRemainingEl.innerHTML = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
    alarmSetEl.value = null;

    if (totalSeconds <= 0) {
      document.body.classList.add("finish-countdown");

      playAlarm();
      clearInterval(intervalId);

      return;
    }
    console.log(totalSeconds);
    totalSeconds -= 1;
  }

  updateCountDown();
  intervalId = setInterval(updateCountDown, 1000);
}

function pauseCountDown() {
  clearInterval(intervalId);
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
