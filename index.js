function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let period = "AM";

  if (hours == 0) hrs = 12;
  if (hours > 12) {
    hours = hours - 12;
    period = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + period;
  setInterval(clock, 1000);
  document.getElementById("clock").innerText = time;
}

clock();

let hour = 0;
let minute = 0;
let second = 0;

let setTime;

function startTimer() {
  hour = document.getElementById("timer-hour").value;
  minute = document.getElementById("timer-minute").value;
  second = document.getElementById("timer-second").value;
  //   pauseTimer();
  setTime = setInterval(() => {
    timer(second, minute, hour);
  }, 1000);
}

function pauseTimer() {
  clearInterval(setTime);
}

function resetTimer() {
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("timer-hour").value = "00";
  document.getElementById("timer-minute").value = "00";
  document.getElementById("timer-second").value = "00";
}

function timer() {
  second -= 1;
  if (second == 00) {
    second = 60;
    minute--;
    if (minute == 00) {
      minute = 0;
      hour--;
    }
  }
  console.log("called", second);
  document.getElementById("timer-hour").value = returnData(hour);
  document.getElementById("timer-minute").value = returnData(minute);
  document.getElementById("timer-second").value = returnData(second);
}

function returnData(input) {
  return input == 0 || input > 10 ? input : `0${input}`;
}
