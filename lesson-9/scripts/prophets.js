const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData () {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let birthdate = document.createElement('h3');
        let birthplace = document.createElement('h3');
        let portrait = document.createElement('img');

        name.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `${prophet.birthdate}`;
        birthplace.textContent = `Born in ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}