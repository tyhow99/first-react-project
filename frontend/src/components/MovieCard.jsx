import { createContext, useContext } from "react";
import "../css/MovieCard.css"

//movie is a prop that is an object
//used as info about the movie
function MovieCard({movie}) {

    function onClick(){
        alert("click")
    }
  return (
    <div className="movie-card">
        <div className="move-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="move-overlay">
                <button className="favorite-btn" onClick={onClick}> 
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
         </div>
    </div>
  );
}

export default MovieCard;