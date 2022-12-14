
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weathertype');
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".degrees");




async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=8c74a60b5f6b568c8e3e1e4f679ce818';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();




function  displayResults(weatherData) {
    temp.innerHTML = `${weatherData.main.temp.toFixed(0)}&deg;F`; 
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
    humidity.textContent = `Humidity: ${weatherData.main.humidity}`;

    
  }



  function windchill(temperature, speed){
    if(speed>3.0 && temperature<=50){
        let wc = 35.74 + (0.6215*temperature)-(35.75*(speed**0.16)) + (0.4275*temperature*(speed**0.16))
        let windChill = Math.round(wc);
        return windChill
    }else{
        return "N/A"
    }
  }


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=8c74a60b5f6b568c8e3e1e4f679ce818";
fetch(forecastURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        const forecastData = data.list.filter(x =>
            x.dt_txt.includes(`18:00:00`));

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
        forecastData.slice(0, 3).forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()];
            day++;
        });

        for (let i = 0; i <3; i++) {
    
            const imagesrc = `https://openweathermap.org/img/wn/${forecastData[i].weather[0].icon}@2x.png`;
            const desc = forecastData[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
            document.getElementById(`day${i+1}`).innerHTML = `${Math.round(forecastData[i].main.temp)}° F`;
        }
        
});

