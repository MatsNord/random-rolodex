import React from 'react';
// Component to display name and title
const Name = ( {name} ) => (
  <div>
    <div>{name.title}</div>
    <div>{name.first}</div>
    <div>{name.last}</div>
  </div>
);

export default Name;
