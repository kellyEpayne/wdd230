
function displayBusiness(business){
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let name = document.createElement('p');
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

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(phoneNumber);
    card.appendChild(url);

    document.querySelector('div.directoryCards').appendChild(card);
}

fetch('./json/data.json')
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const businesses = jsonObject['businesses'];

    businesses.forEach(displayBusiness)
    console.log(businesses)
});


const gridButton = document.querySelector('.dirGridTog');
const listButton = document.querySelector('.dirListTog');
const directoryCards = document.querySelector('.directoryCards');


gridButton.addEventListener('click', () => {
    directoryCards.classList.add('dirGrid')
    directoryCards.classList.remove('dirList')
});

listButton.addEventListener('click', () =>{
    directoryCards.classList.add('dirList')
    directoryCards.classList.remove('dirGrid')
})