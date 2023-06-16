import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Baseboard from './components/Baseboard/Baseboard';

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      cor: '#57C278'
    },
    {
      name: 'Front-End',
      cor: '#82CFFA'
    },
    {
      name: 'Data Science',
      cor: '#A6D157'
    },
    {
      name: 'Devops',
      cor: '#E06B69'
    },
    {
      name: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      name: 'Mobile',
      cor: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador() {

  }

  function changeColorTeam(cor, name) {
    setTeams(teams.map(t => {
      if (t.name === name) {
        t.cor = cor;
      }
      return t;
    }));
  }

  function adicionarColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(t => t.name)} adicionarColaborador={c => adicionarColaborador(c)} />
      {
        teams.map(t => {
          return <Team
            key={t.name}
            name={t.name}
            cor={t.cor}
            colaboradores={colaboradores.filter(c => c.time === t.name)}
            toDelete={deletarColaborador} 
            changeColor={changeColorTeam}/>
        })
      }
      <Baseboard />
    </div>
  );
}

export default App;
