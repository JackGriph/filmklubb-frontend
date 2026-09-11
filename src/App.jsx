import { useMovies } from './hooks/useMovies'

function App() {
  const { movies, loading, error } = useMovies()

  return (
    <main>
      <h1>Filmklubb</h1>

      {error && <p role="alert">{error}</p>}

      {loading ? (
        <p>Laddar…</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title} ({movie.type}){' '}
              {movie.watched ? `– sedd, betyg ${movie.rating}` : '– osedd'}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App