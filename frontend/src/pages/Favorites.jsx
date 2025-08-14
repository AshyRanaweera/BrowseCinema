import "../css/Favorites.css"; // Assuming you have a CSS file for styling the Favorites page
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return(
        <div className="favorites">

        <h1>Your Favorites</h1>

        <div className="movies-grid">
                {favorites.map((movie) => (
                    (
                         <MovieCard movie={movie}  key = {movie.id} />
                    )
                ))}
            </div>

            </div>

        );
    }


    return (
        <div className="favorites">
            <h1>Your Favorites</h1>
            
        </div>
    );
}
export default Favorites;