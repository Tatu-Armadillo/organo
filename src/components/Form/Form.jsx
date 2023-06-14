import TextField from '../TextField/TextField';
import Dropdown from '../Dropdown/Dropdown';
import './Form.css'
import Button from '../Button/Button';
import { useState } from 'react';

const Form = ({ teams, adicionarColaborador }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [image, setImage] = useState('');
    const [time, setTime] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        adicionarColaborador({
            nome,
            cargo,
            image,
            time
        })
        setNome('')
        setCargo('')
        setImage('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField changed={value => setNome(value)} value={nome} label='Nome' placeholder='Digite seu Nome' required={true} />
                <TextField changed={value => setCargo(value)} value={cargo} label='Cargo' placeholder='Digite seu cargo' required={true} />
                <TextField changed={value => setImage(value)} value={image} label='Imagem' placeholder='Digite o endereco da imagem' />
                <Dropdown
                    changed={value => setTime(value)}
                    value={time}
                    required={true}
                    label='Time'
                    itens={teams} />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

export default Form;