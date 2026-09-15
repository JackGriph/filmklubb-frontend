import './FilterTabs.css'

const FILTERS = [
    { value: 'alla', label: 'Alla'},
    { value: 'osedda', label: 'Osedda'},
    { value: 'sedda', label: 'Sedda'},
]

function FilterTabs({ value, onChange}){
    return (
        <div className="filters">
            {FILTERS.map((filter) => (
                <button
                key={filter.value}
                type="button"
                className={filter.value === value ? 'filter filter-on' : 'filter'}
                aria-pressed={filter.value === value}
                onClick={() => onChange(filter.value)}
                >
                    {filter.label}
                </button>

            ))}
        </div>
    )
}

export default FilterTabs