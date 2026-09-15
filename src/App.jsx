import { useMovies } from './hooks/useMovies'
import AddMovieForm from './components/AddMovieForm'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const { movies, loading, error, addMovie } = useMovies()

  return (
    <main className="app">
      <h1>Filmklubb</h1>

      {error && <p role="alert">{error}</p>}

      <AddMovieForm onAdd={addMovie}/>

      {loading ? <p>Laddar…</p> : <MovieList movies={movies} />}
    </main>
  )
}

export default App