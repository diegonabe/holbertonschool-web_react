import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications'; // Importamos el componente Notifications
import reportWebVitals from './reportWebVitals';

// Renderizamos la aplicación y el componente Notifications
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Creamos un nuevo div para renderizar el componente Notifications
const notificationsRoot = document.createElement('div');
notificationsRoot.id = 'root-notifications';
document.body.appendChild(notificationsRoot);

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  notificationsRoot
);

reportWebVitals();

