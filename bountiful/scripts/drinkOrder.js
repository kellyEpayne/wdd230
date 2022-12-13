//const button = document.querySelector('.formSubmit');
//button.addEventListener('click', submitted);

document.querySelector("form").addEventListener("submit", submitted);

function submitted(){

    let htmlFirstName = document.getElementById('firstName');
    let htmlEmail = document.getElementById('email');
    let htmlPhoneNumber = document.getElementById('phoneNumber');
    let htmlFruit1 = document.getElementById('fruit1');
    let htmlFruit2 = document.getElementById('fruit2');
    let htmlFruit3 = document.getElementById('fruit3');
    let htmlInstruction = document.getElementById('instructions');

    document.querySelector('#orderN').textContent = `Name: ${htmlFirstName.value}`;
    document.querySelector('#orderE').textContent = `Email: ${htmlEmail.value}`;
    document.querySelector('#orderP').textContent = `Phone Number: ${htmlPhoneNumber.value}`;
    document.querySelector('#orderS').textContent = `Special Instructions: ${htmlInstruction.value}`;

    placingFruits([htmlFruit1, htmlFruit2, htmlFruit3]);

    let numDrinks = window.localStorage.getItem("number-drinks")

    if (numDrinks == null) {
        localStorage.setItem('number-drinks', 1);
    } else{
        numDrinks = parseInt(numDrinks);
        numDrinks += 1;
        localStorage.setItem('number-drinks', numDrinks);
    }
};

function placingFruits(chosenFruits){

    fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
    .then(function (response){
    return response.json();
    })
    .then(function (jsonObject) {
    const fruitJson = jsonObject;

    displayFruits(chosenFruits, fruitJson);
    nutrition(chosenFruits, fruitJson);
    })
};

function displayFruits(chosenFruits, fruitJson){

    let holdStr = "Chosen Fruits:";

    for (fruit in chosenFruits){
        holdStr += ` ${fruitJson[chosenFruits[fruit].value].name},`;
    }

    document.querySelector('#orderF').textContent = holdStr.slice(0,-1);
}

function nutrition(chosenFruits, fruitJson){

    let carbs = 0;
    let proteins = 0;
    let fats = 0;
    let sugars = 0;
    let calories = 0;

    for (let num = 0; num < 3; num++) {
        let fruit = fruitJson[chosenFruits[num].value].nutritions;

        carbs += fruit.carbohydrates;
        proteins += fruit.protein;
        fats += fruit.fat;
        sugars += fruit.sugar;
        calories += fruit.calories;
    };

    document.getElementById('carbs').textContent = `Carbohydrates: ${Math.round(carbs)}`;
    document.getElementById('protein').textContent = `Proteins: ${Math.round(proteins)}`;
    document.getElementById('fat').textContent = `Fats: ${Math.round(fats)}`;
    document.getElementById('sugar').textContent = `Sugars: ${Math.round(sugars)}`;
    document.getElementById('cals').textContent = `Calories: ${Math.round(calories)}`;
};