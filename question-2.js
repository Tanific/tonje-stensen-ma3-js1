const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=16b6cb5324754ad68924d74f7665adeb";

const resultsContainer = document.querySelector(".results")

async function getInfo() {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";


    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);
        console.log(facts[i].rating);
        console.log(facts[i].tags.length);

        if(i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].name}</div>`
        resultsContainer.innerHTML += `<div class="result">${facts[i].rating}</div>`
        resultsContainer.innerHTML += `<div class="result">${facts[i].tags.length}</div>`
    }

}

getInfo();