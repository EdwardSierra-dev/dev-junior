import React from 'react';
import '../styles/Boton.css';

{/* Se envia los datos directos, ya que solo tendrá un valor */}
{/* La logica de las funciones se crea en los compentes donde van a ser renderizados, en el padre. */}
function Boton(props) {
  return (
    <button className={props.esBotonClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={props.contarClicks}>
      {props.text}
    </button>
  );
}

export default Boton;