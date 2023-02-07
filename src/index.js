import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Ex 1 3
// import AppCity, {AppBook} from './App';

// Ex 2 4
import AppCity, {AppBook} from './AppClass'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
