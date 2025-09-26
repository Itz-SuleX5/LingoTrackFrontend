import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/templates/home.js'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './auth/auth0-config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider {...auth0Config}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
