import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebaseConfig from './config/FirebaseConfig';
import * as firebase from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);