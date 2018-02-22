import React from 'react';
import Name from './name/name';
import InfoItem from './info/infoItem';
import EmailItem  from './info/emailItem';
import Styles from './card.css'

const Card = ({person}) => {
  
  // TODO: Create utility/component for date formatting
  const dob = person.dob.substring(0,10);
  const registered = person.registered.substring(0,10);

  return (
    <div className="card">
      <div className="header">
        <h1><Name className={Styles.name} name={person.name.first} /> <Name className={Styles.name} name={person.name.last} /> </h1>
      </div>
      <div className="row">
      <div className="col-2 picture">
        <img src={person.picture.large} alt="" />
      </div> 
      <div className="col-9 info info-block">
        <InfoItem infoText="Title" info={person.name.title} />
        <InfoItem infoText="Phone" info={person.phone} />
        <InfoItem infoText="Cell phone" info={person.cell} />
        <EmailItem infoText="Email" email={person.email} />
        <InfoItem infoText="Day of birth" info={dob} />
        <InfoItem infoText="Registered" info={registered} />
      </div>
      </div>
    </div>
  )
};

export default Card;