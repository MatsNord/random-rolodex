import React, {Component} from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import {getContacts} from './../api';
import Card from './../components/contact/card/card';
import PersonCard from './../components/contact/card/person-card';
import PersonList from './../components/contact/card/person-list';
import FullInfo from './../components/contact/card/full-info';


class Contacts extends Component {
  // Binding the state to the instance. It works as using a contructor
  state = {
    persons: undefined
  };

  filterListHandler= (event) => {
    var updatedList = this.state.persons;
    updatedList = updatedList.filter(function(item){
      return item.name.first.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1 
          || item.name.last.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
    });
       
       const asc = (a, b) => a.name.last < b.name.last || a.name.first < b.name.first;
       const desc = (a, b) => a.name.last > b.name.last || a.name.first > b.name.first;

       updatedList = 
        this.selectBox.value === 'DEC' 
        ? updatedList.sort(desc)
        : this.selectBox.value === 'ASC'
        ? updatedList.sort(asc)
        : updatedList;
    
    this.setState({persons: updatedList});
  };

  sortedListHandler = (event) => {
      var updatedList = this.state.persons;
      if (this.sortBox.checked) {
        var op = '<';
        updatedList = updatedList.sort( (a, b) => (a < b));
      } else {
        updatedList = updatedList.sort( (a, b) => a > b);
      }
    this.setState({persons: updatedList});
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
              render={(props) => <PersonList {...props} persons={persons} filter={this.filterListHandler} order={this.sortedListHandler}/>}
            />
            <Route 
              exact 
              path='/contacts/:id' 
              render={({match}) => <PersonCard person={ persons.find( person => person.email === match.params.id )} />}
            />
          </Switch>
        ): <div className="loader centered"/> }
      </div>
    );
  }
}

export default withRouter(Contacts);