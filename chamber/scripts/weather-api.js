const currentTemp = document.querySelector('#current-temp');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = '39f4939faa846357186f47bbb2e87e54';
const latitude = '9.998141';
const longitude = '-84.119764';
const units = 'metric';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    windChill.innerHTML = `<strong>${calculateWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed.toFixed(0))}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

  function calculateWindChill(t, w) {
    if (t < 10) {
      return (13.12 + 0.6215*t - 11.37*w**0.16 + 0.3965*t*w**0.16).toFixed(2);
    } else {
      return 'N/A';
    }
  }
  
  apiFetch();