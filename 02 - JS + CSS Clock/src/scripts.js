const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  return { hours, minutes, seconds };
};

const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const setDate = (time) => {
  const secondsDegrees = (360 / 60) * time.seconds + 90;
  const minuteDegrees = (360 / 60) * time.minutes + 90;
  const hourDegrees = (360 / 12) * time.hours + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  t = setTimeout(function () {
    setDate(getTime());
  }, 500);
};

const startTime = (time) => {
  minutes = checkTime(time.minutes);
  seconds = checkTime(time.seconds);
  document.getElementById("number").innerHTML =
    time.hours + ":" + minutes + ":" + seconds;
  t = setTimeout(function () {
    startTime(getTime());
  }, 500);
};

startTime(getTime());
setDate(getTime());
