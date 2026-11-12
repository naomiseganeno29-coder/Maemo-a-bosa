function city(event) {
event.preventDefault();
let search = document.querySelector("#search-city");

let h1 = document.querySelector("h1");
h1.innerHTML= search.value

 let date = document.querySelector(".date");
  let currentDate = new Date();
  date.innerHTML = formatDate(currentDate);
}
let form = document.querySelector("#form");
form.addEventListener("submit", city);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
}
