function christmasCountdown() {
  const date = new Date();
  const christmasDay = new Date(2024, 11, 25, 0, 0, 0);

  const countdownDiff = new Date(christmasDay - date);

  const days = countdownDiff.getUTCDate();
  const hours = countdownDiff.getUTCHours();
  const minutes = countdownDiff.getUTCMinutes();
  const seconds = countdownDiff.getUTCSeconds();

  numberDays.innerHTML = days;
  numberHours.innerHTML = hours;
  numberMinutes.innerHTML = minutes;
  numberSeconds.innerHTML = seconds;
}

christmasCountdown();

setInterval(christmasCountdown, 1000);
