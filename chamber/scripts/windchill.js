const apiURL = 
    'https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&APPID=83ce386cabbd9497aa668a6ee115617e';

const htmlWindChill = document.getElementById("windchill");
const htmlTemp = document.getElementById("tempature");
const htmlWindSpeed = document.getElementById("windspeed");
const weatherIcon = document.querySelector(".weatherIcon");
const currentWeather = document.querySelector(".weatherType");
const weatherLocation = document.querySelector(".weatherLocation");

async function apiFetch(){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else{
            console.log('Response not OK');
        }
    } catch(error){
        console.log(`Error: ${error.message}`);
    }
}

function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayWeather(data){
    const tempature = data.main.temp;
    const windSpeed = data.wind.speed;

    htmlTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    htmlWindSpeed.textContent = windSpeed;
    let desc = capitalize(data.weather[0].description);
    currentWeather.textContent = desc;
    weatherLocation.textContent = `Location: Denver`;
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `Icon of the current weather in Denver which is ${desc}`);
    
    if( tempature <= 50 & windSpeed > 3){
        let windChillCal = 35.74 + 0.6215*tempature - 35.75*windSpeed**0.16 + 0.4275*tempature*windSpeed**0.16;
        windChillCal = Math.round(windChillCal * 10) / 10;
        htmlWindChill.textContent = windChillCal;
    }
}

apiFetch();