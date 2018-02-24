import React, { Component } from 'react';
import Main from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">Contacts</div>
        <Main />
      </div>
    );
  }
}
export default App;
