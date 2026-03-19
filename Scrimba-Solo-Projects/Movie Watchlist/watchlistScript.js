const existingMovies1 = JSON.parse(localStorage.getItem('movies')) || []
const set = new Set(existingMovies1)
let existingMovies = [...set]
console.log(existingMovies)
let mainHTML = ""

function displayMovies(){
    for (var movie of existingMovies){

    const html = `
    <div class="movie">
        <img id="movie-img" src="${movie.Poster}" alt="">
        <div class="movie-info">
            <div class="title-stars">
                <h2>${movie.Title}</h2>
                <img id="star-icon" src="images/star-icon.png">
                <h3 class="rating">${movie.imdbRating}</h3>
            </div>
            <div class="runtime-genre-watchlist" id=${movie.Title}>
                <h3>${movie.Runtime}</h3>
                <h3>${movie.Genre}</h3>
                <button id="remove-watchlist-btn"><img src="images/minus-icon.png"> Remove</button>
            </div>
            <p class="plot">${movie.Plot}</p>
        </div>
    </div>
    `
    mainHTML += html
    }
    document.getElementById("watchlist-container").innerHTML = mainHTML
}

displayMovies()

function removeMovie(movieTitle) {
    const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];

    const updatedMovies = existingMovies.filter(movie => movie.Title != movieTitle);
    console.log(updatedMovies)

    localStorage.setItem('movies', JSON.stringify(updatedMovies));
    existingMovies = updatedMovies;

    displayMovies();
}

document.addEventListener("click", function(event) {
    removeMovie(event.target.parentElement.id) 
})
