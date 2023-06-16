import Collaborator from '../Collaborator/Collaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = ({ name, cor, colaboradores, toDelete, changeColor }) => {

    return (
        (colaboradores.length > 0) ?
            <section className='team' style={{ backgroundImage:'url(/imagens/fundo.png)', backgroundColor: hexToRgba(cor, '0.6') }}>
                <input
                    onChange={e => changeColor(e.target.value, name)}
                    value={cor}
                    type='color'
                    className='input-color' />

                <h3 style={{ borderColor: cor }}>{name}</h3>

                <div className='colaboradores'>
                    {colaboradores.map((c, i) => {
                        return <Collaborator
                            backgroundColor={cor}
                            key={c.nome + i}
                            name={c.nome}
                            cargo={c.cargo}
                            image={c.image}
                            toDelete={toDelete} />
                    })}
                </div>
            </section>
            : ''
    );
}

export default Team;
