import React from 'react';
import Testimonio from './components/Testimonio.jsx';
import data from './data/people-data.json';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
          <div className='main-container'>
          <h1>Esto es lo que dice el makia</h1>
          { data.map(person => 
              <Testimonio
                key={person.key} 
                name={person.name}
                profession={person.profession}
                job={person.job}
                hobby={person.hobby}
                work={person.work}
                testimonio={person.testimonio} />
            )}
            {/** Map me permite recorrer un array sencillo de manera completa [] */}
        </div>
      </div>
    </>
  )
}

export default App;
