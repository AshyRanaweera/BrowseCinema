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

    
    
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return // Prevent search if already loading

        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null); // Clear any previous errors

        } catch (error) {
            setError("Failed to search for movies. Please try again later.");
            console.error("Search error:", error);
        } finally {
            setLoading(false);
        }

        setSearchQuery("");
    };



    return (
        <div class="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error">{error}</div>}

            {loading ?<div className="loading">Loading...</div> : <div className="movies-grid">
                {movies.map((movie) => (
                    (
                         <MovieCard movie={movie}  key = {movie.id} />
                    )
                ))}
            </div>  }

              

        </div>    
    ); 

}
 export default Home;