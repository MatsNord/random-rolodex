import React, { Component } from 'react';
import Main from './routes';
import {NavLink as Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">The contacts app<span className="login"><Link id="login" to="/contacts">Login</Link></span></div>
        <Main />
      </div>
    );
  }
}
export default App;
