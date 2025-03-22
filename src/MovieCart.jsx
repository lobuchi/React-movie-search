import React from "react";

// const movie1 = 
//     {
//         "Title": "Spiderman",
//         "Year": "1990",
//         "imdbID": "tt0100669",
//         "Type": "movie",
//         "Poster": "N/A"
    
// }

const MovieCard = ({ movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"}
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
