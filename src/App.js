import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Baseboard from './components/Baseboard/Baseboard';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      name: 'Tatu-Armadillo ',
      cargo: 'Desenvolvedor de software',
      image: 'https://github.com/Tatu-Armadillo.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Gabriel de Sousa Gomes Pedroso',
      cargo: 'Desenvolvedor',
      image: 'https://github.com/SousaPedroso.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'ARTHUR GOMES FELIX',
      cargo: 'Desenvolvedor',
      image: 'https://github.com/Goodnight64.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Marcos Vinicius',
      cargo: 'Desenvolvedor',
      image: 'https://github.com/mCszao.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'João Ygor Ramalho',
      cargo: 'Desenvolvedor',
      image: 'https://github.com/joaoygorr.png',
      team: teams[1].name
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(c => c.id !== id));
  }

  function changeColorTeam(cor, id) {
    setTeams(teams.map(t => {
      if (t.id === id) {
        t.cor = cor;
      }
      return t;
    }));
  }

  function adicionarColaborador(colaborador) {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(t => t.name)} adicionarColaborador={c => adicionarColaborador(c)} />
      {
        teams.map(t => {
          return <Team
            key={t.id}
            id={t.id}
            name={t.name}
            cor={t.cor}
            colaboradores={colaboradores.filter(c => c.team === t.name)}
            toDelete={deletarColaborador}
            changeColor={changeColorTeam} />
        })
      }
      <Baseboard />
    </div>
  );
}

export default App;

