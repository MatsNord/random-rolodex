import React, {Component} from 'react';
import {getSeededData, getContacts} from './../api';
import * as Details from './../components/contact/details';
import Card from './../components/contact/card';

class Contacts extends Component {
  // Binding the state to the instance. It works as using a contructor
  state = {
    persons: []
  };

  // An convienent API call, remove when not needed for dev.
  loadData = () => {
    getContacts().then(data => {
      console.info("seeded data...", data[0]);
      const persons = data;
      this.setState({persons: persons})
    });
  };

  componentWillMount() {
   // This API call may or should be moved to a Redux implementation
   // For now as the App only has two views, and no mutations of data, it will be sufficient
    getContacts().then(data => {
      console.info("seeded data...", data[0]);
      const persons = data;
      this.setState({persons: persons})
    });
  };

  render() {
    // All fetched data of persons. 
    const {persons} = this.state;
    return (
      <div>
        <div>
          <button onClick={this.loadData}>
            PRESS YUO!
          </button>
        </div>
        <div class="items">
          {persons.map((person, idx) => <Card person={person}/>)}
        </div>
      </div>
    );
  }
}

export default Contacts;