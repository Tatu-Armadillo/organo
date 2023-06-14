import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Baseboard from './components/Baseboard/Baseboard';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

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
            primaryColor={t.primaryColor}
            secondaryColor={t.secondaryColor}
            colaboradores={colaboradores.filter(c => c.time === t.name)} />
        })
      }
      <Baseboard />
    </div>
  );
}

export default App;
