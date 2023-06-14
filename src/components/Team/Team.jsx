import Collaborator from '../Collaborator/Collaborator';
import './Team.css';

const Team = ({ name, primaryColor, secondaryColor, colaboradores }) => {

    const cssSection = { backgroundColor: secondaryColor }
    const cssH3 = { borderColor: primaryColor }

    return (
        (colaboradores.length > 0) ?
            <section className='team' style={cssSection}>
                <h3 style={cssH3}>{name}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((c, i) => {
                        return <Collaborator
                            backgroundColor={primaryColor}
                            key={c.nome + i}
                            name={c.nome}
                            cargo={c.cargo}
                            image={c.image} />
                    })}
                </div>
            </section>
            : ''
    );
}

export default Team;
