import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import "../css/Home.css"; // Assuming you have a CSS file for styling the Home page


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("Failed to load popular movies. Please try again later.");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    
    
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

            <div className="movies-grid">
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