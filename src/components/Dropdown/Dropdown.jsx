import './Dropdown.css';

const Dropdown = ({ value, itens, label,  required, changed}) => {
    return (
        <div className='dropdown'>
            <label>{label}</label>
            <select onChange={e => changed(e.target.value)} required={required} name="Itens" value={value}>
                <option value={''}></option>
                {itens.map(i => {
                    return <option key={i.id}>{i.name}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;