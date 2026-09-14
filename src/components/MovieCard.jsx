import { BASE_URL } from '../api/client'
import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <article className="card">
      {movie.imageUrl ? (
        <img
          className="card-image"
          src={BASE_URL + movie.imageUrl}
          alt={movie.title}
        />
      ) : (
        <div className="card-image card-image-empty">🎬</div>
      )}

           <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-type">{movie.type}</p>

        {movie.watched ? (
          <p className="card-badge">Sedd · {movie.rating}/5</p>
        ) : (
          <p className="card-status">Inte sedd än</p>
        )}

        {movie.notes && <p className="card-notes">{movie.notes}</p>}
      </div>
    </article>
  )
}

export default MovieCard