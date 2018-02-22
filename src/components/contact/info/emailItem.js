import React from 'react';
// Component to display mail link
const EmailITem = ( {infoText, email} ) => (
  <div className="info-item">
    <div className="info info-text">{infoText}</div> <a href={`mailto:${email}`}>{email}</a>
  </div>
);
export default EmailITem;

