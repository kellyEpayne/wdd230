fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
.then(function (response){
    return response.json();
})
.then(function (jsonObject) {
    console.log(jsonObject)
    const fruitList = jsonObject

    for (let num = 1; num < 4; num++) {
        peel(fruitList, num)
    };
})


function peel(fruitList, num){
    let htmlfruits = document.querySelector('.freshFruit');
    let select = document.createElement('select');
    let label = document.createElement('label');

    for (fruitnum in fruitList){
        let option = document.createElement('option');
        let fruitName = fruitList[fruitnum].name;

        option.value = fruitnum;
        option.text = fruitName;

        select.appendChild(option);

    };

    label.textContent = `Pick fruit number ${num}:`;
    select.id = `fruit${num}`;

    label.appendChild(select)
    htmlfruits.appendChild(label);

}