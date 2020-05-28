import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBBTPKy7Y_aoHuHuysRfdfzWLQdKlQfbmc",
  authDomain: "spalaunch.firebaseapp.com",
  databaseURL: "https://spalaunch.firebaseio.com",
  projectId: "spalaunch",
  storageBucket: "spalaunch.appspot.com",
  messagingSenderId: "866150115709",
  appId: "1:866150115709:web:ae504dc05aa4f3cac38414"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
