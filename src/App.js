import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {orange500, deepOrange500, grey50} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import RaisedButton from 'material-ui/RaisedButton'; // add
import { getSeededData, getContacts } from './api';
//import {Contact} from './components/contact';
//import * as Details from './components/contact/details';
import Card from './components/contact/card';
import MCard from './components/contact/mcard';
import './index.css';


import './App.css';

const muiTheme = getMuiTheme({
  palette: { 
    primary1Color: orange500, 
    accent1Color: deepOrange500,
    textColor: deepOrange500,
    canvasColor: grey50
    }}
  );


class App extends Component {
  
  state = {
    person: null
   }

  loadData = () =>{
    getSeededData().then(data => {
      console.info("seeded data...", data[0]);
      const person = data[0];
      this.setState({ person: person })
    });
  };

  componentWillMount() {
    getContacts('dk').then(data => {
      console.info("getContacts", data);
      const persons = data;
      this.setState({ persons: persons })
    });
  }
  render() {
    const { persons } = this.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <div className="App">
          <div>
            <RaisedButton
              onClick={this.loadData}
            >
              PRESS YUO!
            </RaisedButton>
            <div className="list-view">
            { persons ? 
                persons.map( (person, idx) => 
                  <MCard key={idx} person={person} />
              ) : null
            }
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
