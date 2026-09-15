import RatingStars from './RatingStars'
import ImageUpload from './ImageUpload'
import { BASE_URL } from '../api/client'
import './MovieCard.css'

function MovieCard({ movie, onUpdate, onUpload }) {
  function update(changes) {
    onUpdate(movie.id, { ...movie, ...changes })
  }

  return (
    <article className="card">
      <div className="card-poster">
        {movie.imageUrl ? (
          <img src={BASE_URL + movie.imageUrl} alt={movie.title} />
        ) : (
          <span className="card-poster-empty">🎬</span>
        )}

        <button
          type="button"
          className={movie.watched ? 'card-toggle card-toggle-on' : 'card-toggle'}
          onClick={() => update({ watched: !movie.watched, rating: null })}
          aria-label={movie.watched ? 'Markera som osedd' : 'Markera som sedd'}
          title={movie.watched ? 'Markera som osedd' : 'Markera som sedd'}
        >
          ✓
        </button>
      </div>

      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-type">{movie.type}</p>

        {movie.watched ? (
          <RatingStars value={movie.rating} onChange={(rating) => update({ rating })} />
        ) : (
          <p className="card-status">Inte sedd än</p>
        )}

        {movie.notes && <p className="card-notes">{movie.notes}</p>}

        <ImageUpload movieId={movie.id} onUpload={onUpload} />
      </div>
    </article>
  )
}

export default MovieCard