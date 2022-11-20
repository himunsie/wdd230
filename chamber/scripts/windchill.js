
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weathertype');
const windChill = document.querySelector(".windchill");
const temp = document.querySelector(".degrees");
const wSpeed = document.querySelector(".windspeed");



async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=herriman&units=imperial&appid=8c74a60b5f6b568c8e3e1e4f679ce818';
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
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;</strong>F`; //toFixed(0) is non
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
    

    // weatherIcon.src = iconsrc;
    // weatherIcon.alt = desc;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
    wSpeed.textContent = `Wind Speed: ${Math.round(weatherData.wind.speed)} mph`;
    windChill.textContent = `Wind Chill: ${windchill(weatherData.main.temp, weatherData.wind.speed)}° F`;
    
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
