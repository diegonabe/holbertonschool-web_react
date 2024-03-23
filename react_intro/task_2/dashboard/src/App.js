import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const isIndex = true; // Determina si estamos en la página de inicio o no

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Etiqueta e input para el correo electrónico */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        {/* Etiqueta e input para la contraseña */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        {/* Botón "OK" */}
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(isIndex)}</p>
        <p>&copy; {getFullYear()} </p>
      </footer>
    </div>
  );
}

export default App;

