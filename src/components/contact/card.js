import React from 'react';
import name from './name/name';
import * as Details from './details';

const Card = ({person}) => {
  console.log(person);
  return (<div>
    <Details.Name name={person ? person.name : null} />
    <Details.Phone landline={person ? person.phone : null} />
    <Details.Phone cell={person ? person.cell : null} />
  </div>)
};

export default Card;