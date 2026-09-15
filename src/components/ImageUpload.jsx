import './ImageUpload.css'

function ImageUpload({movieId, onUpload}) {
    function handleChange(event) {
        const file = event.target.files[0]

        if (file) {
            onUpload(movieId, file)
        }

        //Nollställ så att samma fil kan väljas igen
        event.target.value = ''
    }

    return (
        <label className="upload">
            Välj bild
            <input type ="file" accept="image/*" onChange={handleChange}/>
        </label>
    )
}

export default ImageUpload