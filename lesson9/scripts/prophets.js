const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

function displayProphets(prophet) {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;


    let th = 'th'
    if(prophet.order == 1){
        th = 'st'
    }else if (prophet.order == 2){
        th = 'nd' 
    }else if (prophet.order == 3){
        th = 'rd'
    }
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${th} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];

        prophets.forEach(displayProphets)
        console.log(prophets)
    });