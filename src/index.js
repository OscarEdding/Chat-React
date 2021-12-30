import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ChatProvider from './context/ChatProvider.js';

ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
	{/* Con esto, nuestra App puede tener acceso a nuestro saludo */}
  </React.StrictMode>,
  document.getElementById('root')
);