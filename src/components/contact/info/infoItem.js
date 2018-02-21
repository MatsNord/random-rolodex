import React from 'react';
// Component to display name and title
const InfoItem = ( {infoText, info} ) => (
  <div class="info-item">
    <div class="info info-text">{infoText}</div><div class="info">{info}</div>
  </div>
);
export default InfoItem;