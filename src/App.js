import React, { Component } from 'react';
import { getSeededData, getContacts } from './api';
import * as Details from './components/contact/details';
import Card from './components/contact/card';
import './App.css';

class App extends Component {
  
  state = {
    persons: []
   }

  loadData = () =>{
    getContacts().then(data => {
      console.info("seeded data...", data[0]);
      const persons = data;
      this.setState({ persons: persons })
    });
  };

  componentWillMount() {
    getContacts().then(data => {
      console.info("seeded data...", data[0]);
      const persons = data;
      this.setState({ persons: persons })
    });
  }
  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <div>
          <button
            onClick={this.loadData}
          >
            PRESS YUO!
          </button>
        </div>
        <div class="items">
        { persons.map( (person, idx) =>  <Card person={person} /> ) }
        </div>
      </div>
    );
  }
}

export default App;
