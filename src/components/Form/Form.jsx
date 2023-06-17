import Field from '../Field/Field';
import Dropdown from '../Dropdown/Dropdown';
import './Form.css'
import Button from '../Button/Button';
import { useState } from 'react';

const Form = ({ teams, adicionarColaborador, cadastrarTime }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        adicionarColaborador({
            nome,
            cargo,
            image,
            team
        })
        setNome('')
        setCargo('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form-container'>
            <form className='form' onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field changed={value => setNome(value)} value={nome} label='Nome' placeholder='Digite seu Nome' required={true} />
                <Field changed={value => setCargo(value)} value={cargo} label='Cargo' placeholder='Digite seu cargo' required={true} />
                <Field changed={value => setImage(value)} value={image} label='Imagem' placeholder='Digite o endereco da imagem' />
                <Dropdown
                    changed={value => setTeam(value)}
                    value={team}
                    required={true}
                    label='Time'
                    itens={teams} />
                <Button>Criar Card</Button>
            </form>
            <form className='form' onSubmit={e => {
                e.preventDefault();
                cadastrarTime({ name: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field changed={value => setNomeTime(value)} value={nomeTime} label='Nome Time' placeholder='Digite o nome do time' required={true} />
                <Field type='color' changed={value => setCorTime(value)} value={corTime} label='Cor time' placeholder='Digite a cor do time' required={true} />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    );
}

export default Form;