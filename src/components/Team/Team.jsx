import Collaborator from '../Collaborator/Collaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = ({ id, name, cor, colaboradores, toDelete, changeColor, toFavotite }) => {
    return (
        (colaboradores.length > 0) ?
            <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(cor, '0.6') }}>
                <input
                    onChange={e => changeColor(e.target.value, id)}
                    value={cor}
                    type='color'
                    className='input-color' />

                <h3 style={{ borderColor: cor }}>{name}</h3>

                <div className='colaboradores'>
                    {colaboradores.map(c => {
                        return <Collaborator
                            key={c.id + c.name}
                            id={c.id}
                            name={c.name}
                            cargo={c.cargo}
                            image={c.image}
                            backgroundColor={cor}
                            favorite={c.favorite}
                            toDelete={toDelete} 
                            toFavotite={toFavotite}/>
                    })}
                </div>
            </section>
            : ''
    );
}

export default Team;
