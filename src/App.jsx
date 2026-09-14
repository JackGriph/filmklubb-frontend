import { useMovies } from './hooks/useMovies'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const { movies, loading, error } = useMovies()

  return (
    <main className="app">
      <h1>Filmklubb</h1>

      {error && <p role="alert">{error}</p>}

      {loading ? <p>Laddar…</p> : <MovieList movies={movies} />}
    </main>
  )
}

export default App