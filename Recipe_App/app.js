const searchForm = document.querySelector("form"),
    searchResultDiv = document.querySelector(".search-result"),
    container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "7421a208";
const APP_key = "9539db00419894fba751039b20c4fe5a";

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value; //get search value
    //console.log(searchQuery);

    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    //console.log(response);
    generateRecipe(data.hits);
    console.log(data);
}

function generateRecipe(results) {
    container.classList.remove("initial");
    let generatedRecipe = "";
    results.map(result => {
        //create html item every time looping through array and add it to generateRecipe
        generatedRecipe +=
        `
        <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                
                <a class="view-button" href="${result.recipe.url}" target = "_blank" >View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels.length: "No data Found"} </p>
            <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>
        </div>
        `
    });

    searchResultDiv.innerHTML = generatedRecipe;
}