const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const two_dayTemp = document.querySelector('#two-days-temp');
const three_dayTemp = document.querySelector('#three-days-temp');
const apiKey = '39f4939faa846357186f47bbb2e87e54';
const latitude = '33.138317';
const longitude = '-117.287642';
const units = 'metric';
const current_data = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
const forecast_data = `https://api.openweathermap.org/data/2.5/forecast?lat=33.138317&lon=-117.287642&appid=39f4939faa846357186f47bbb2e87e54&units=metric&cnt=5`;

async function apiFetch() {
    try {
      const response = await fetch(current_data);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
    try {
      const response_forecast = await fetch(forecast_data);
      if (response_forecast.ok) {
        const data = await response_forecast.json();
        displayForecast(data);
      } else {
          throw Error(await response_forecast.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

  function displayForecast(forecastData) {
    tomorrowTemp.innerHTML = `<strong>${forecastData.list[0].main.temp.toFixed(0)}</strong>`;
    two_dayTemp.innerHTML = `<strong>${forecastData.list[1].main.temp.toFixed(0)}</strong>`;
    three_dayTemp.innerHTML = `<strong>${forecastData.list[2].main.temp.toFixed(0)}</strong>`;
  }
  
  apiFetch();