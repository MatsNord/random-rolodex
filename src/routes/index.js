import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsView from '../views/contacts';

const Main = () => (
  <main>
    <Switch>
      <Route path='/contacts' component={ContactsView}/>
    </Switch>
  </main>
);

export default Main;