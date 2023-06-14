import './TextField.css';

const TextField = ({ label, placeholder, required = false, changed, value }) => {

    const placeholderModificada = `${placeholder}...`;

    return (
        <div className='field-text'>
            <label>{label}</label>
            <input value={value} onChange={e => changed(e.target.value)} required={required} placeholder={placeholderModificada} />
        </div>
    );
}

export default TextField;