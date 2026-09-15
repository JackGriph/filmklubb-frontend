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

  const visible = movies.filter((movie) => {
    if (filter === 'sedda') return movie.watched
    if (filter === 'osedda') return !movie.watched
    return true
  })

  return (
    <main className="app">
      <h1>Filmklubb</h1>

      <ErrorBanner message={error} onRetry={reload} onDismiss={clearError} />
      <AddMovieForm onAdd={addMovie}/>
      <FilterTabs value={filter} onChange={setFilter} />
      

    {loading ? <p>Laddar…</p> : <MovieList movies={visible} onUpdate={saveMovie} onUpload={uploadImage} />}
    </main>
  )
}

export default App