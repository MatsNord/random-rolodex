import React, {Component} from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import {getContacts} from './../api';
import Card from './../components/contact/card/card';
import PersonCard from './../components/contact/card/person-card';
import PersonList from './../components/contact/card/person-list';
import FullInfo from './../components/contact/card/full-info';

const asc = (a, b) => a.name.last < b.name.last || a.name.first < b.name.first;
const desc = (a, b) => a.name.last > b.name.last || a.name.first > b.name.first;



class Contacts extends Component {
  // Binding the state to the instance. It works as using a contructor
  state = {
    persons: undefined,
    backData: undefined
  };

  filterListHandler = (event) => {
    var updatedList = this.state.backData;
    updatedList = updatedList.filter(function(item){
      return item.name.first.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1 
          || item.name.last.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
    });
       
    this.setState({persons: updatedList});
  };

  sortedListHandler = (event) => {
      var updatedList = this.state.backData;
        if (event.target.checked) {
        var op = '<';
        updatedList = updatedList.sort( asc );
      } else {
        updatedList = updatedList.sort( desc );
      }
    this.setState({persons: updatedList});
   };

  // An convienent API call, remove when not needed for dev.
  loadData = () => {
    getContacts().then(data => {
      console.info('seeded data...', data[0]);
      const persons = data;
      this.setState({persons: persons, backData: persons})
    });
  };

  componentWillMount() {
   // This API call may or should be moved to a Redux implementation
   // For now as the App only has two views, and no mutations of data, it will be sufficient
    getContacts().then(data => {
      console.info('seeded data...', data[0]);
      const persons = data;
      this.setState({persons: persons, backData: persons})
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