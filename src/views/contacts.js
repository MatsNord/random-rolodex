import React from 'react';
import {Link} from 'react-router-dom';
import Contacts from '../containers/contacts';

const ToolBar = () => (
  <div> Contacts app Toolbar 
    <div><Link to='/contacts/becky.sims@example.com'>becky</Link></div>
  </div>
);
const ContactsView = () => {
  return(
    <div>
      <ToolBar />
      <Contacts />
    </div>
  );
};

export default ContactsView;
