const getWeather = function () {
  const city = document.getElementById("input").value;
  const apiKey = "8c6a5c1e47c984933de968ff1b363300";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const showDisplay = document.getElementById("display");
      const sky = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      showDisplay.innerHTML = `
      <h2> Sky :- ${sky} </h2>
      <h2> Temperature :- ${temperature} </h2>
      <h2> Humidity :- ${humidity} </h2>
      <h2> Wind Speed :- ${windSpeed} </h2>
      
      `;
    });
};
