import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

//En las funciones handleAuth y handleLogout, se concatena cadenas con el simbolo <+>; ya que no se reconoce sintáxis ES6 (Template Strings) de JS en el navegador.
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }

    this.handleAuth = this.handleAuth.bind( this );
    this.handleLogout = this.handleLogout.bind( this );
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged( user => {
        this.setState( { user: user } );
      }
    );
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup( provider )
      .then( result => console.log( result.user.email + ' ha iniciado sesión.' ) )
      .catch( error => console.log( 'Error ' + error.code + ': ' + error.message ) );
  }

  handleLogout() {
    firebase.auth().signOut()
      .then( result => console.log( result.user.email + ' ha iniciado sesión.' ) )
      .catch( error => console.log( 'Error ' + error.code + ': ' + error.message ) );
  }

  renderLoginButton () {
    if(this.state.user)
      return (
        <div>
          <img width="100" src={ this.state.user.photoURL } alt={ this.state.user.displayName }/>
          <p>Hola { this.state.user.displayName }</p>
          <button onClick={ this.handleLogout }>Salir</button>
        </div>
      )
    else
      return (
        <button onClick={ this.handleAuth }>Login con Google</button>
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hipstergram</h1>
        </header>
        <p className="App-intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;
