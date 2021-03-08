const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const CourseExpired = "28 March 2021";

const countdown = () => {
  const courseTime = new Date(CourseExpired);
  const currentTime = new Date();

  const totalSeconds = (courseTime - currentTime) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

// initial call
countdown();

setInterval(countdown, 1000);
