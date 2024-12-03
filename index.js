setInterval(function () {
  const date = new Date();
  const christmasDay = new Date(2024, 11, 25, 0, 0, 0, 0);

  const countdownDiff = new Date(christmasDay - date);

  const days = countdownDiff.getDate();
  const hours = countdownDiff.getHours();
  const minutes = countdownDiff.getMinutes();
  const seconds = countdownDiff.getSeconds();

  numberDays.innerHTML = days;
  numberHours.innerHTML = hours;
  numberMinutes.innerHTML = minutes;
  numberSeconds.innerHTML = seconds;
}, 1000);
