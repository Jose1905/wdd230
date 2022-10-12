const list = document.querySelector('ul');
const input = document.getElementById('favchap');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');
    
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    listText.textContent = myItem;
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();
});