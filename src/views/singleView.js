import React from 'react';
import Contacts from '../containers/contacts';
import { Link } from 'react-router-dom';


const ToolBar = () => (
  <div><Link to='/contacts'>Search</Link></div>
);
const ContactsView = () => {
  return(
    <div>
    <Link to='/contacts'>Schedule</Link>
      <ToolBar />
      <Contacts />
    </div>
  );
};

export default ContactsView;