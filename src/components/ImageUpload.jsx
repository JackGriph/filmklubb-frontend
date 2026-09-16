import './ImageUpload.css'

function ImageUpload({movieId, onUpload, label }) {
    function handleChange(event) {
        const file = event.target.files[0]

        if (file) {
            onUpload(movieId, file)
        }

        //Nollställ så att samma fil kan väljas igen
        event.target.value = ''
    }

    return (
       <label className="upload" title={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 8h3l2-2h6l2 2h3v11H4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <input
        type="file"
        accept="image/*"
        aria-label={label}
        onChange={handleChange}
      />
    </label>

    )
}

export default ImageUpload