async function searchMovie(){
    const response = await fetch("http://www.omdbapi.com/?t=interstellar&apikey=ba2d466e")
    const data = await response.json()
    console.log(data)
}

searchMovie()