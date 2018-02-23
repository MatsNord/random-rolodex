import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsView from '../views/contacts';
import SingleView from '../views/singleView';
import Contacts from '../containers/contacts';
import { Silly } from '../components/silly';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Silly}/>
      <Route path='/contacts' component={ContactsView}/>
    </Switch>
  </main>
);

export default Main;