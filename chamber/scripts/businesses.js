const url = "json/data.json"

async function getBusinessData () {
    const response = await fetch(url);
    const data = await response.json();
    
    console.table(data.businesses);
}

getBusinessData();