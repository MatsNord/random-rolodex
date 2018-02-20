import React from 'react';
// Component to display name and title
const Location = ( {location} ) => (
  location ?
  <div>
    <div>
      {location.city}
    </div>
    <div>
      {location.state}
    </div>
    <div>
      {location.nisse}
    </div>
  </div> : <div> No Location </div>
);

export default Location;
