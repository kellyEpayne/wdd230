// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = 
    'https://api.openweathermap.org/data/2.5/weather?q=FairBanks&units=imperial&APPID=83ce386cabbd9497aa668a6ee115617e';

async function apiFetch(){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            console.log('Response not OK');
        }
    } catch(error) {
        console.log(`Error: ${error.message}`);
    }
}

apiFetch();

function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(data){
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    let desc = capitalize(data.weather[0].description);
    captionDesc.textContent = desc;
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `Icon of the current weather in FairBanks which is ${desc}`);
}