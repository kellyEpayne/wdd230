let htmlDrink = document.querySelector(".drunk");

let numDrinks = window.localStorage.getItem('number-drinks');

if (numDrinks == null){
    htmlDrink.textContent = "You haven't made any drinks. Give it a try!";
} else{

    numDrinks = parseInt(numDrinks)

    if (numDrinks > 1){
        htmlDrink.textContent = `You have made: ${numDrinks} drinks.`;
    } else{
        htmlDrink.textContent = `You have made: ${numDrinks} drink.`;
    }
}