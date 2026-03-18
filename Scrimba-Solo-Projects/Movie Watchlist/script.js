const searchBtn = document.getElementById("search-btn")
const searchBox = document.getElementById("search-txt")

searchBtn.addEventListener("click", async () => {
    const searchTxt = searchBox.value
    console.log(searchTxt)
    const data = await searchMovie(searchTxt)
    displayMovies(data)
})

async function searchMovie(searchTxt){
    const response = await fetch(`http://www.omdbapi.com/?t=${searchTxt}&apikey=ba2d466e`)
    const data = await response.json()
    return data
}

function displayMovies(movie) {
    console.log(movie.Title)
    const html = `
    <div class="films-container">
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
                        <a id="add-watchlist-btn" href="watchlist.html"><img src="images/plus-icon.png"> Watchlist</a>
                    </div>
                    <p class="plot">${movie.Plot}</p>
                </div>
            </div>
        </div>
    `
    document.getElementById("films-container").innerHTML = html
}