function updateHeading(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#text-area");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  updateDateTime();

  let city = searchInput.value;
  let apiKey = "3f310a9d1446bt67o90cafe1b1ebbfbc";
  let apiUrl = `https://api.shecodes.io/weather/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  console.log(city);
  let currenttemperatureValue = document.querySelector(
    ".current-temperature-value"
  );
  currenttemperatureValue.innerHTML = `${temperature}°C`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", updateHeading);

function updateDateTime(date) {
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDate = days[day];

  return `${formattedDate} ${hours}:${minutes}`;
}
let now = new Date();

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = updateDateTime(now);
