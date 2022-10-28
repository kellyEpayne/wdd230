let lonelyDate = new Date();

let daysSince = document.querySelector('#days')

let lastVist = window.localStorage.getItem("last-vist")

function daysBetween(lastVist, currentVist){
    const date1 = new Date(lastVist)
    const date2 = new Date(currentVist)

    const aDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / aDay);

    return diffInDays;
}

if (lastVist == null) {
    daysSince.textContent = "This is your first time visting us!"
    localStorage.setItem('last-vist', lonelyDate)
}else{
    let days = daysBetween(lastVist, lonelyDate)
    daysSince.textContent = `${days} Days ago`
    localStorage.setItem('last-vist', lonelyDate)
}