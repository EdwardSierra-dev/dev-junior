import React from 'react';
import '../styles/Contador.css';

function Contador(props) {
  return (
    <div className='contador'>
        {props.clicks}
    </div>
  );
} 

export default Contador;