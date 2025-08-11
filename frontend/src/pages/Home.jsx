import MovieCard from "../components/MovieCard";
import { useState } from "react";


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 },
        { id: 3, title: "The Dark Knight", year: 2008 }
    ];
    
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };



    return (
        <div class="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="search-form" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => (
                    (
                         <MovieCard movie={movie}  key = {movie.id} />
                    )
                ))}
            </div>    

        </div>    
    ); 

}
 export default Home;