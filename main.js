alert("Good day coders, all the projects you see are only fit for Cellphone users");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mins.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
