import React from 'react';
// Component to display mail link
const Email = ( {email} ) => (
  <a href={`mailto:${email}`}>{email}</a>
);
export default Email;
