const loading = document.querySelector(".loading");
const resultsContainer = document.querySelector(".results");
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";


async function getNames() {
    
    try {

        const response = await fetch(url);

        const results = await response.json();   

        const facts = results.results;

        resultsContainer.innerHTML = ""; 

        for (i = 0; i < facts.length; i++) {
        
            if(i === 8) {   
                break;
            }
            
            resultsContainer.innerHTML += `<div class="cards">
                                                <h3>Name</h3>
                                                <p>${facts[i].name}</p>
                                                <h3>Rating</h3>
                                                <p>${facts[i].rating}</p>
                                                <h3>Tags</h3>
                                                <p>${facts[i].tags.length}</p> 
                                            </div>`;

                                            
        }
    } catch (error) {
        
            resultsContainer.innerHTML = displayError("Four oh Four. Something went horribly wrong!");
    }
}

getNames();

