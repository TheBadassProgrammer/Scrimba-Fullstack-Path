const searchBtn = document.getElementById("search-btn")
const searchBox = document.getElementById("search-txt")

let watchlist = []
let movie = {}

searchBtn.addEventListener("click", async () => {
    const searchTxt = searchBox.value
    console.log(searchTxt)
    const data = await searchMovie(searchTxt)
    movie = data
    console.log(movie)
    displayMovie(data)
})

function addWatchlist(){
    watchlist.push(movie)
    addMovie(movie)
    console.log(watchlist)
}

function addMovie(movieObject) {
    // 1. Get existing users from localStorage or initialize an empty array
    const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];

    // 2. Push the new object into the array
    existingMovies.push(movieObject);

    // 3. Save the updated array back to localStorage as a JSON string
    localStorage.setItem('movies', JSON.stringify(existingMovies));
}

async function searchMovie(searchTxt){
    const response = await fetch(`http://www.omdbapi.com/?t=${searchTxt}&apikey=ba2d466e`) //use s instead of t to get list of movies
    const data = await response.json()
    return data
}

function displayMovie(movie) {
    const html = `
    <div class="movie">
        <img id="movie-img" src="${movie.Poster}" alt="">
        <div class="movie-info">
            <div class="title-stars">
                <h2>${movie.Title}</h2>
                <img id="star-icon" src="images/star-icon.png">
                <h3 class="rating">${movie.imdbRating}</h3>
            </div>
            <div class="runtime-genre-watchlist">
                <h3>${movie.Runtime}</h3>
                <h3>${movie.Genre}</h3>
                <button id="add-watchlist-btn" onclick="addWatchlist()"><img src="images/plus-icon.png"> Watchlist</button>
            </div>
            <p class="plot">${movie.Plot}</p>
        </div>
    </div>
    `
    document.getElementById("films-container").innerHTML = html
}