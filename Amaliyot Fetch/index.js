let api = {
  key: "84a3781201a7f9a9bda21e4f05b6c2f0",
  baseUrl: "https://api.openweathermap.org/data/2.5/"
}

let searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery)
function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value)
    console.log(searchBox.value);
    searchBox.value = ''
  }
}

function getResults(query) {
  fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json()
    })
    .then(displayResults)
    .catch((error) => alert(error,'Error Location'))

}
function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  let mainTemp = document.querySelector('.main-temp .temp');
  let wetherel = document.querySelector('.weather');
  let hilow = document.querySelector('.hi-low');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`
  mainTemp.innerHTML = ` ${Math.floor(weather.main.temp)}<span>°C</span>`;
  wetherel.innerHTML = weather.weather[0].main;
  hilow.innerHTML = `${weather.main.temp_min}°C/ ${weather.main.temp_max}°C`
  document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + weather.name + ")";
}

