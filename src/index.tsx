import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Store/store';
import { Provider } from 'react-redux';
import NavBarComp from './component/NavBarComp';





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBarComp/>
      <App />

    </Provider>
    
  </React.StrictMode>,document.getElementById('root')
);

