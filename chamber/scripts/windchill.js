const tempature = 50
const windSpeed = 5

const htmlWindChill = document.getElementById("windchill")
const htmlTemp = document.getElementById("tempature")
const htmlWindSpeed = document.getElementById("windspeed")

htmlTemp.textContent = tempature
htmlWindSpeed.textContent = windSpeed

if( tempature <= 50 & windSpeed > 3){
    let windChillCal = 35.74 + 0.6215*tempature - 35.75*windSpeed**0.16 + 0.4275*tempature*windSpeed**0.16
    windChillCal = Math.round(windChillCal * 10) / 10
    htmlWindChill.textContent = windChillCal
}

