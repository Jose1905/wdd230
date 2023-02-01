const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener('click', () => {
    if(input != ""){
        const newItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        newItem.innerHTML = input.value;
        deleteButton.innerHTML = "❌";
        newItem.appendChild(deleteButton);
        list.appendChild(newItem);
        deleteButton.addEventListener('click', function() {
            list.removeChild(newItem);
        })
    }

    input.focus();
    input.value = "";
});