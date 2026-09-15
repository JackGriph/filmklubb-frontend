import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import AddMovieForm from './components/AddMovieForm'
import FilterTabs from './components/FilterTabs'
import MovieList from './components/MovieList'
import ErrorBanner from './components/ErrorBanner'
import './App.css'

function App() {
  const { movies, loading, error, addMovie, saveMovie, uploadImage, reload, clearError } = useMovies()
  const [filter, setFilter] = useState('alla')
  const [showForm, setShowForm] = useState(false)

  const visible = movies.filter((movie) => {
    if (filter === 'sedda') return movie.watched
    if (filter === 'osedda') return !movie.watched
    return true
  })

  const unwatched = movies.filter((movie) => !movie.watched).length
  const watched = movies.length - unwatched

  // Stänger formuläret när filmen faktiskt sparats.
  async function handleAdd(data) {
    const created = await addMovie(data)
    if (created) setShowForm(false)
    return created
  }

  return (
    <main className="app">
      <header className="hero">
        <h1 className="hero-title">Filmklubb</h1>
        <p className="hero-text">
          Filmer och serier att se. Markera som sedd, sätt betyg och spara en affisch.
        </p>
        {!loading && (
          <p className="hero-stats">
            {unwatched} att se · {watched} sedda
          </p>
        )}
      </header>

      <ErrorBanner message={error} onRetry={reload} onDismiss={clearError} />

      <button
        type="button"
        className={showForm ? 'add-toggle add-toggle-open' : 'add-toggle'}
        aria-expanded={showForm}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Avbryt' : '+ Lägg till film'}
      </button>

      {showForm && <AddMovieForm onAdd={handleAdd} />}

      <FilterTabs value={filter} onChange={setFilter} />

      {loading ? (
        <p>Laddar…</p>
      ) : (
        <MovieList movies={visible} onUpdate={saveMovie} onUpload={uploadImage} />
      )}
    </main>
  )
}

export default App