const API_KEY="104c9fb2ec7c2a92707ba98d382f8d81";
const BASE_URL ="https://api.themoviedb.org/3";


//async means we wait till it gets result
//awaits means it waits for it to set
export const  getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};


//specifies what you want to search for
export const  searchMovies = async(query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}
        &query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};