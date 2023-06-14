import './Collaborator.css';

const Collaborator = ({ name, cargo, image, backgroundColor }) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Collaborator;