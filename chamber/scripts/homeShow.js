
function spotlight(business){

    
    let card = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let location = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let url = document.createElement('a');
    
    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', business.name + " logo");
    logo.setAttribute('loading', 'lazy');

    name.textContent = business.name;
    location.textContent = business.address;
    phoneNumber.textContent = business.phoneNumber;
    url.textContent = business.url;

    url.setAttribute('href', business.url)

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(phoneNumber);
    card.appendChild(url);
    card.appendChild(location);

    document.querySelector('.spotlight').appendChild(card);
}

function limit(business){
    return business.level >= 2
}

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

fetch('./json/data.json')
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    hold = businesses.filter(limit);

    if (hold.length > 3){
        shuffle(hold);
        spotlight(hold[0]);
        spotlight(hold[1]);
        spotlight(hold[2]);
    } else {
        hold.forEach(spotlight);
    }
});