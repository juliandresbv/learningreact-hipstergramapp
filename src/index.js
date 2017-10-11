import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyBAYehnGDJwVDYFlaAH1sO55L_OeuyI5P0",
    authDomain: "hipstergram-r34ct.firebaseapp.com",
    databaseURL: "https://hipstergram-r34ct.firebaseio.com",
    projectId: "hipstergram-r34ct",
    storageBucket: "hipstergram-r34ct.appspot.com",
    messagingSenderId: "11115897997"
};

firebase.initializeApp( config );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
