const searchBtn = document.getElementById("search-btn")
const searchBox = document.getElementById("search-txt")

searchBtn.addEventListener("click", async () => {
    const searchTxt = searchBox.value
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
}