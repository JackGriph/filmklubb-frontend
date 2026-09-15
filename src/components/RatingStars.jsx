import './RatingStars.css'

function RatingStars({ value, onChange }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={star <= value ? 'star star-filled' : 'star'}
          onClick={() => onChange(star)}
          aria-label={`Sätt betyg ${star} av 5`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default RatingStars