import React from 'react';
// Component to display phonenumbers
const Phone = ( {landline, cell} ) => {
  const lNbr = landline ? <div>{landline}</div> : null;
  const cNbr = cell ? <div>{cell}</div> : null;
  return (
    <div>
      <div>{lNbr}</div>
      <div>{cNbr}</div>
    </div>
    );
};
export default Phone;
