function setAlarm() {
 const alarmSetEl=document.getElementById("alarmSet")
 const timeRemainingEl = document.getElementById("timeRemaining");

let totalSeconds=alarmSetEl.value
let seconds=totalSeconds%60
let minutes=(totalSeconds-seconds)/60


 timeRemainingEl.innerHTML=`Time Remaining: ${alarmSetEl.value}`

 console.log(minutes);
 

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
