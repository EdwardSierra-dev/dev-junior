import './App.css';
import Card from './components/Card.jsx';
import data from './data/data.json';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-tarjetas'>
        {data.map(character =>
          <Card 
            key={character.id}
            id={character.id}
            pic={character.image}
            name={character.name}
            species={character.species}
            gender={character.gender}
          />
        )}
      </div>
    </div>
  )
}

export default App
