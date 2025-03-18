import './App.css';
import Card from './components/Card.jsx';

function App() {
  return (
    <>
      <h1>Esta es mi app de Rick y Morty</h1>
      <Card 
        pic='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        name='Edward'
        id='23'
        species='Humano'
        gender='Masculino'
      />
    </>
  )
}

export default App
