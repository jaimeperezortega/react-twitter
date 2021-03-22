import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//ESTE FICHERO IMPORTA EL COMPONENTE APP.JS Y LO RENDERIZA MÁS ABAJO


ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);


//INDEX.JS ES EL PUNTO DE ENTRADA A MI APLICACIÓN. VEMOS QUE LO QUE RENDERIZA ES EL COMPONENTE APP.JS


