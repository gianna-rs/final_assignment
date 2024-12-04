home.addEventListener("click", function () {
  document.body.classList.add("homeButton");
  document.body.classList.remove("pistachioButton");
  document.body.classList.remove("crackButton");
  document.body.classList.remove("meltButton");
});

pistachio.addEventListener("click", function () {
  document.body.classList.add("pistachioButton");
  document.body.classList.remove("homeButton");
  document.body.classList.remove("crackButton");
  document.body.classList.remove("meltButton");
});

crack.addEventListener("click", function () {
  document.body.classList.add("crackButton");
  document.body.classList.remove("pistachioButton");
  document.body.classList.remove("homeButton");
  document.body.classList.remove("meltButton");
});

melt.addEventListener("click", function () {
  document.body.classList.add("meltButton");
  document.body.classList.remove("pistachioButton");
  document.body.classList.remove("crackButton");
  document.body.classList.remove("homeButton");
});

setInterval(function () {
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
}, 1000);
