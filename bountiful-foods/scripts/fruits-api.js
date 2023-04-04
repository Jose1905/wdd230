const input_name = document.querySelector('#fname')
const input_email = document.querySelector('#email')
const input_phone = document.querySelector('#phone')
const input_fruit1 = document.querySelector('#fruit1');
const input_fruit2 = document.querySelector('#fruit2');
const input_fruit3 = document.querySelector('#fruit3');
const input_instructions = document.querySelector('#special-instructions')

const sum_name = document.querySelector('#sum-fname')
const sum_email = document.querySelector('#sum-email')
const sum_phone = document.querySelector('#sum-phone')
const sum_fruits = document.querySelector('#sum-fruits');
const sum_instructions = document.querySelector('#sum-instructions')
const sum_carbohydrates = document.querySelector('#sum-carbohydrates')
const sum_protein = document.querySelector('#sum-protein')
const sum_fat = document.querySelector('#sum-fat')
const sum_sugar = document.querySelector('#sum-sugar')
const sum_calories = document.querySelector('#sum-calories')
const url = "json/fruits.json"

async function getFruitsData () {
    const response = await fetch(url);
    const data = await response.json();
    displayOptions(data);
}

async function getFruitsValues () {
    const response = await fetch(url);
    const data = await response.json();
    sumFruitValues(data);
}

function displayOptions(fruits) {
    fruits.forEach(fruit => {
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');

        option1.setAttribute('value', fruit.name);
        option1.textContent = fruit.name;
        option2.setAttribute('value', fruit.name);
        option2.textContent = fruit.name;
        option3.setAttribute('value', fruit.name);
        option3.textContent = fruit.name;

        fruit1.appendChild(option1);
        fruit2.appendChild(option2);
        fruit3.appendChild(option3);
    })
    
}

function sumFruitValues(fruits) {
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;

    fruits.forEach(fruit => {
        if (fruit.name == input_fruit1.value || fruit.name == input_fruit2.value || fruit.name == input_fruit3.value) {
            carbohydrates += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            calories += fruit.nutritions.calories;
        }        
    })

    sum_carbohydrates.textContent = carbohydrates.toFixed(1);
    sum_protein.textContent = protein.toFixed(1);
    sum_fat.textContent = fat.toFixed(1);
    sum_sugar.textContent = sugar.toFixed(1);
    sum_calories.textContent = calories.toFixed(1);
}

function getInputs() {
    sum_name.textContent = input_name.value;
    sum_email.textContent = input_email.value;
    sum_phone.textContent = input_phone.value;
    sum_fruits.textContent = `${input_fruit1.value}, `;
    sum_fruits.textContent += `${input_fruit2.value}, `;
    sum_fruits.textContent += input_fruit3.value;
    sum_instructions.textContent = input_instructions.value;

    getFruitsValues();

}

getFruitsData();