home.addEventListener("click", function () {
  clearInterval(myInterval);
  document.body.classList.add("home_button");
  document.body.classList.remove("pistachio_button");
  document.body.classList.remove("crack_button");
  document.body.classList.remove("melt_button");
});

pistachio.addEventListener("click", function () {
  clearInterval(myInterval);
  document.body.classList.add("pistachio_button");
  document.body.classList.remove("home_button");
  document.body.classList.remove("crack_button");
  document.body.classList.remove("melt_button");
});

crack.addEventListener("click", function () {
  clearInterval(myInterval);
  document.body.classList.add("crack_button");
  document.body.classList.remove("pistachio_button");
  document.body.classList.remove("home_button");
  document.body.classList.remove("melt_button");
});

melt.addEventListener("click", function () {
  clearInterval(myInterval);
  document.body.classList.add("melt_button");
  document.body.classList.remove("pistachio_button");
  document.body.classList.remove("crack_button");
  document.body.classList.remove("home_button");
});

let myInterval = setInterval(function () {
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
