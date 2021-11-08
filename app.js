// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// Using the first 150 Pokemon (AKA Objects) in the PokeAPI 
const numOfPokemon = 150;

// The createPokeCard function creates a new card (AKA Section Element) and adds a new card to the webpage inside the div with the id of "container"
// NOTE: The value that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the PokeAPI
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for the new card using the data that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in upper case text.
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" >
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/Number then takes the returned data and passes it into the createPokeCard function
// NOTE: the argument passed into the "id" parameter will be a number created in the loop in the next function (AKA the getPokemon function)
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each ID
// NOTE: Using async/await on this function because the code in the getPokemonData function is asynchronous (There is an Axios request in that function)
async function getPokemon(){
    for(i = 1; i <= numOfPokemon; i++){
        console.log(i);
        await getPokemonData(i);
    }
}
// Running/Executing the getPokemon function which runs/executes the getPokemonData function each time through the loop
getPokemon();