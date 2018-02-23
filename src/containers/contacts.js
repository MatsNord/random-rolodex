import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {getContacts} from './../api';
import Card from './../components/contact/card';
import { withRouter } from 'react-router-dom';

class Contacts extends Component {
  // Binding the state to the instance. It works as using a contructor
  state = {
    persons: undefined
  };

  // An convienent API call, remove when not needed for dev.
  loadData = () => {
    getContacts().then(data => {
      console.info('seeded data...', data[0]);
      const persons = data;
      this.setState({persons: persons})
    });
  };

  componentWillMount() {
   // This API call may or should be moved to a Redux implementation
   // For now as the App only has two views, and no mutations of data, it will be sufficient
    getContacts().then(data => {
      console.info('seeded data...', data[0]);
      const persons = data;
      this.setState({persons: persons})
    });
  };

  componentDidMount(){
    console.log('Did mount...', this.props);
  }

  render() {
    // All fetched data of persons. 
    const {persons} = this.state;
    // The switch directive is to mutually exclude the other route
    return (
      <div>
        { persons ? (
          <Switch>
            <Route 
              exact
              path='/contacts'
              render={(props) => <PersonList {...props} persons={persons} />}
            />
            <Route 
              exact 
              path='/contacts/:id' 
              render={({match}) => <PersonCard person={ persons.find( person => person.email === match.params.id )} />}
            />
          </Switch>
        ): <div>Loading... </div>}
      </div>
    );
  }
}

const PersonList = ({persons}) => (
    <div className="items"> 
      { persons ? persons.map((person, idx) => <Card key={idx} person={person}/>) : null }
    </div>);

const PersonCard = ({person}) => (
  <div className="items">
    <Card person={person} fullInfo/>
  </div>
);

export default withRouter(Contacts);