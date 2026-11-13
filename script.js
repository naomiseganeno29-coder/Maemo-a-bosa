function weather(response){
  let temperatureElement = document.querySelector("#number");
  let temperature = response.data.temperature.current;
  let h1 = document.querySelector("h1");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#Humidity");
  let windElement = document.querySelector("#speed");
 h1.innerHTML = response.data.city;
 descriptionElement.innerHTML = response.data.condition.description;
temperatureElement.innerHTML = Math.round(temperature);
humidityElement.innerHTML =`${response.data.temperature.humidity}%`;
windElement.innerHTML =`${response.data.wind.speed}km/h`;
}
function searchCity(city) {
  let apiKey = "b420aaba7a6e2993te7fe21e7fc6oeff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(weather);
}






function city(event) {
event.preventDefault();
let search = document.querySelector("#search-city");



 let date = document.querySelector(".date");
  let currentDate = new Date();
  date.innerHTML = formatDate(currentDate);
  searchCity(search.value);
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
