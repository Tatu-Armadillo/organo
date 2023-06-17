import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Collaborator.css';

const Collaborator = ({ id, name, cargo, image, backgroundColor, favorite, toDelete, toFavotite }) => {

    function favoriteCollaborator() {
        toFavotite(id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favoriteCollaborator
    }

    return (
        <div className='collaborator'>
            <AiFillCloseCircle size={25} className='delete' onClick={() => toDelete(id)} />
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
                <div className='favorite'>
                    {favorite
                        ? <AiFillHeart {...propsFavorite} color='#F00'/>
                        : <AiOutlineHeart {...propsFavorite} />}
                </div>
            </div>
        </div>
    );
}

export default Collaborator;