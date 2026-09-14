import { useMovies } from './hooks/useMovies'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const { movies, loading, error } = useMovies()

  return (
    <main className="app">
      <h1>Filmklubb</h1>

      {error && <p role="alert">{error}</p>}

      {loading ? (
        <p>Laddar…</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}

export default App