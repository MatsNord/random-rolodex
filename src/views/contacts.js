import React from 'react';
import {NavLink} from 'react-router-dom';
import Contacts from '../containers/contacts';

const ContactsView = () => {
  return(
    <div>
      <div className="nav-toolbar">
        <NavLink className="bread-crumb"  exact to='/contacts'>Home</NavLink>
      </div>
      <Contacts />
    </div>
  );
};

export default ContactsView;
