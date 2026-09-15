import MovieCard from './MovieCard'
import './MovieList.css'

function MovieList({ movies, onUpdate, onUpload }) {
    if (movies.length === 0) {
        return <p className="movie-list-empty">Inga filmer i listan än.</p>
    }
    

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onUpdate={onUpdate} onUpload={onUpload} />
            ))}
        </div>
    )
}

export default MovieList