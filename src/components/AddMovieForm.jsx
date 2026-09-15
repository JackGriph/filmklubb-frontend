import {useState } from 'react'
import './AddMovieForm.css'

function AddMovieForm({ onAdd}) {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('Film')
    const [notes, setNotes] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const created = await onAdd ({ title, type, notes})

        if (created) {
            setTitle('')
            setType('Film')
            setNotes('')
        }
    }
    
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
            className="add-form-field"
            placeholder="Titel"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />

            <select 
            className="add-form-field"
            value={type}
            onChange={(event) => setType(event.target.value)}
            >
                <option value="Film">Film</option>
                <option value="Serie">Serie</option>
            </select>

            <textarea
            className="add-form-field"
            placeholder="Antekning (valfritt)"
            rows={2}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            />

            <button className="add-form-button"
            type="submit">Lägg till</button>
        </form>
    )
}

export default AddMovieForm