import React, { Component } from 'react';
import { getSeededData } from './api';
//import {Contact} from './components/contact';
import * as Details from './components/contact/details';
import Card from './components/contact/card';
import './App.css';

class App extends Component {
  
  state = {
    person: null
   }

  loadData = () =>{
    getSeededData('foo').then(data => {
      console.info("seeded data...", data[0]);
      const person = data[0];
      this.setState({ person: person })
    });
  };

  // componentWillMount() {
  //   getSeededData('foo').then(data => {
  //     console.info("seeded data...", data[0]);
  //     const person = data[0];
  //     this.setState({ name: `${person.name.first} ${person.name.last}`, email: person.email })
  //   });
  // }
  render() {
    const { person } = this.state;
    return (
      <div className="App">
        <div>
          <button
            onClick={this.loadData}
          >
            PRESS YUO!
          </button>
        
          <Details.Name name={person ? person.name : null} />
          <Details.Phone landline={person ? person.phone : null} />
          <Details.Phone cell={person ? person.cell : null} />
          { person ? <Card person={person} /> : null }
        </div>
      </div>
    );
  }
}

export default App;
