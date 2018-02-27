import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsView from '../views/contacts';
import Contacts from '../containers/contacts';

const Main = () => (
  <main>
    <Switch>
      <Route path='/contacts' component={ContactsView}/>
    </Switch>
  </main>
);

export default Main;