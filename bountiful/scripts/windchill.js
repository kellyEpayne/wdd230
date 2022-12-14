const apiURL = 
    'http://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=5ccb8b8305dded445c27bf520b905a29&cnt=4';


const htmlWindChill = document.getElementById("windchill");
const htmlTemp = document.getElementById("tempature");
const weatherIcon = document.querySelector(".weatherIcon");
const currentWeather = document.querySelector(".weatherType");
const weatherLocation = document.querySelector(".weatherLocation");
const humidity = document.querySelector(".humidity");

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
    console.log('hi')
    const todaysWeather = data.list[0];
    console.log(todaysWeather)
    htmlTemp.innerHTML = `<strong>${todaysWeather.main.temp.toFixed(0)}</strong>`;
    let desc = capitalize(todaysWeather.weather[0].description);
    currentWeather.textContent = `Current weather: ${desc}`;
    humidity.textContent= `Humidity: ${todaysWeather.main.humidity}`
    weatherLocation.textContent = `Location: Carlsbad`;
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${todaysWeather.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `Icon of the current weather in Carlsbad which is ${desc}`);

    for(i=1; i < 4; i++){
        let weatherforecast = document.querySelector(`.weatherday${i}`)
        let forecastWeather = data.list[i].main
        let day = new Date();
        day.setDate(day.getDate() + i);
        let dayNum = day.getDate();

        let suffix = "";
        if (dayNum == 1){
            suffix = "st";
        } else if (dayNum == 2){
            suffix = "nd";
        } else if (dayNum == 3){
            suffix = "rd";
        } else{
            suffix = "th";
        }

        weatherforecast.textContent = `${dayNum}${suffix}, High: ${forecastWeather.temp_max}, Low: ${forecastWeather.temp_min}`
    };
}

apiFetch();