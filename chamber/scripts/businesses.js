const url = "json/data.json"

async function getBusinessData () {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.foreach((business) => {
        let card = document.createElement('section');
        let picture = document.createElement('img');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
        let website = document.createElement('a');

        picture.setAttribute('src', business.imageurl);
        picture.setAttribute('alt', `Logo of ${business.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '340');
        picture.setAttribute('height', '440');

        address.textContent = business.address;

        phone.textContent = business.phone;

        website.textContent = business.website;

        card.appendChild(picture);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

getBusinessData();