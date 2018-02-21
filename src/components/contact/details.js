import React from 'react';

export const Name = ( {name} ) => (
    name ?
    <em>
      <div>{name.title}</div>
      <div>{name.first}</div>
      <div>{name.last}</div>
    </em> : <strong>no name</strong>
);

export const Email = ( {email} ) => (
  <a href={`mailto:${email}`}>{email}</a>
);

export const Location = ( {location} ) => (
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

export const Phone = ( {phone} ) => {
  return (
      <span>{phone}</span>
    );
};




