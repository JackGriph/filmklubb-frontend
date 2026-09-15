import RatingStars from './RatingStars'
import { BASE_URL } from '../api/client'
import './MovieCard.css'

function MovieCard({ movie, onUpdate }) {
  function update(changes) {
    onUpdate(movie.id, { ...movie, ...changes })
  }

  return (
    <article className="card">
      {movie.imageUrl ? (
        <img className="card-image" src={BASE_URL + movie.imageUrl} alt={movie.title} />
      ) : (
        <div className="card-image card-image-empty">🎬</div>
      )}

      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-type">{movie.type}</p>

        {movie.watched ? (
          <RatingStars
            value={movie.rating}
            onChange={(rating) => update({ rating })}
          />
        ) : (
          <p className="card-status">Inte sedd än</p>
        )}

        {movie.notes && <p className="card-notes">{movie.notes}</p>}
      </div>
       <button
        type="button"
        className={movie.watched ? 'card-toggle card-toggle-on' : 'card-toggle'}
        onClick={() => update({ watched: !movie.watched, rating: null })}
        aria-label={movie.watched ? 'Markera som osedd' : 'Markera som sedd'}
        title={movie.watched ? 'Markera som osedd' : 'Markera som sedd'}
       >
      ✓
    </button>
    </article>
  )
}

export default MovieCard