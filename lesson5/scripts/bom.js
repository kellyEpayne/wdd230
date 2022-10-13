const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    const inputValue = input.value;
    input.value = '';

    if(inputValue.length != 0){
    const chapter = document.createElement('li');
    const xButton = document.createElement('button');

    chapter.textContent = inputValue;
    xButton.textContent = '❌';

    chapter.appendChild(xButton);
    list.appendChild(chapter);
    
    xButton.addEventListener('click', () => {
        list.removeChild(chapter)
    });
    }

    input.focus();
    
}

)