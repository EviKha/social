import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
  { id: '1', name: 'Manetka' },
  { id: '2', name: 'Samoedka' },
  { id: '3', name: 'Damirka' },
  { id: '4', name: 'Evelinka' }
];
let messageData = [
  { text: 'Hi' },
  { text: 'How are you?' },
  { text: 'Im fine' },
  { text: 'Bye!' }
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogData = {dialogData} messageData = {messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
