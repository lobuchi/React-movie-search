import React from "react";
import { useEffect,useState } from "react";
// df3c92a9

import MovieCard from "./MovieCart";

import './App.css';
import SearchIcon from './search.svg'


const API_URL = "http://www.omdbapi.com?apikey=df3c92a9"


// const movie1 = 
//     {
//         "Title": "Spiderman",
//         "Year": "1990",
//         "imdbID": "tt0100669",
//         "Type": "movie",
//         "Poster": "N/A"
    
// }

const App = () => {
    const [searchTerm,setsearchTerm] = useState('')
    const [movies,setMovies] =  useState([]);
   

        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`)
            const data = await response.json();

            setMovies(data.Search)
     
        } 

    
        useEffect(()=>{
           searchMovies("Spiderman")
        },[])
    return (
       <div className="app">
        <h1>
            MovieLand
        </h1>
        <div className="search">
            <input placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=> setsearchTerm(e.target.value)}
             />
             <img
             src={SearchIcon}
             alt = "search"
             onClick={()=> searchMovies(searchTerm)}
             />
        </div>
        
        {
            movies?.length > 0
            ? (
<div className="container">
           { movies.map((movie) => (
            <MovieCard movie={movie}/>
           ))}
        </div>
            ):
            (
                <div className="empty">
                    <h2>No movies Found</h2>
                </div>
            )
        }

        
       </div>
    );
}
export default App;