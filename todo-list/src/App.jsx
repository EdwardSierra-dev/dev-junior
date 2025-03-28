import './App.css';
import Tarea from './components/Tarea.jsx';

function App() {
  return (
    <>
      <div className='aplicacion-tareas'>
        <h1>Administrador de Tareas</h1>
        <div className='container-tareas'>
          <h1 className='titulo-mis-tareas'>Mis tareas</h1>
          <Tarea texto='Sexo'/>
        </div>     
      </div>

    </>
  )
}

export default App
