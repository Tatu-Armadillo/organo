import { AiFillCloseCircle } from 'react-icons/ai';
import './Collaborator.css';

const Collaborator = ({ name, cargo, image, backgroundColor, toDelete }) => {
    return (
        <div className='collaborator'>
            <AiFillCloseCircle size={25} className='delete' onClick={toDelete} />
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