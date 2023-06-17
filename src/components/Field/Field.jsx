import './Field.css';

const Field = ({ type = 'text', label, placeholder, required = false, changed, value }) => {

    const placeholderModificada = `${placeholder}...`;

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={e => changed(e.target.value)}
                required={required}
                placeholder={placeholderModificada} />
        </div>
    );
}

export default Field;