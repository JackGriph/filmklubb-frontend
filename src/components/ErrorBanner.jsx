import './ErrorBanner.css'

function ErrorBanner({ message, onRetry, onDismiss }) {
  if (!message) {
    return null
  }

  return (
    <div className="error" role="alert">
      <p className="error-text">{message}</p>

      <button type="button" className="error-button" onClick={onRetry}>
        Försök igen
      </button>

      <button
        type="button"
        className="error-button"
        onClick={onDismiss}
        aria-label="Stäng felmeddelandet"
      >
        ✕
      </button>
    </div>
  )
}

export default ErrorBanner