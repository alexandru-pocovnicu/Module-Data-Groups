const timeInput = document.querySelector("#alarmSet"); //store input#alarmSet
const timeRemaining = document.querySelector("#timeRemaining"); // store h1#timeRemaining
const setAlarmButton = document.querySelector("#set"); // store button#set
setAlarmButton.addEventListener("click", setAlarm); // when click on set alarm button call setAlarm function

let currentCountdown;
function setAlarm() {
  if (currentCountdown) {
    clearInterval(currentCountdown);
  }
  let totalSeconds = Number(timeInput.value);

  currentCountdown = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    timeRemaining.innerText = `Time Remaining:${paddedMinutes}:${paddedSeconds}`;
    if (totalSeconds <= 0) {
      clearInterval(currentCountdown);
      currentCountdown = null;
      playAlarm();
      return;
    }
    totalSeconds--;
  }, 1000);
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
