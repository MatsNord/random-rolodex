import React from 'react';
import Name from './name/name';
import Phone from './phone/phone';
import Email from './email/email';
import Location from './location/location';

export const Contact = ( {person} ) => (
  person ? 
  <div>
   <Name name={person.name} />
   <Phone landline={person.phone} cell={person.cell} />
   <Email email={person.email} />
   <Location location={person.location} />
  </div> : null
);