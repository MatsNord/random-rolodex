import React from 'react';
import {Link} from 'react-router-dom';
import Name from './name/name';
import InfoItem from './info/infoItem';
import EmailItem  from './info/emailItem';
import Styles from './card.css'

const Card = ({person, fullInfo}) => {  
  const imgSize = fullInfo ? 'large' : 'medium';

  // TODO: Create utility/component for date formatting  
  //full-heigth
  return (
    <div className={`card ${fullInfo ? 'full-height' : ''}`}>
      <div className={`header ${fullInfo ? '' : ' lower'}`}>
        <h1><Name className={Styles.name} name={person.name.first} /> <Name className={Styles.name} name={person.name.last} /> </h1>
      </div>
      <div className="row">
        <div className={`col-2 picture ${fullInfo ?  'full-view' : ''}`}>
          <img src={person.picture[imgSize]  } alt="" />
        </div>
        { 
          fullInfo 
          ? ( <FullInfo person={person} /> )  
          : ( <ListInfo person={person} /> )
        }
      </div>
    </div>
  )
};

const FullInfo = ({person}) => {
  const dob = formatDate(person.dob);
  const registered = formatDate(person.registered);
  return (
      <div className="col-9 info info-block">
        <InfoItem infoText="Title" info={person.name.title} />
        <InfoItem infoText="Phone" info={person.phone} />
        <InfoItem infoText="Cell phone" info={person.cell} />
        <EmailItem infoText="Email" email={person.email} />
        <InfoItem infoText="Day of birth" info={dob} />
        <InfoItem infoText="Registered" info={registered} />
        <p>A really long text here. A really long text here. A really long text here. A really long text here. A really long text here. A really long text here. A really long text here. A really long text here. A really long text here. </p> 
      </div>
)};

const ListInfo = ({person}) => {
  const dob = formatDate(person.dob);
  const registered = formatDate(person.registered);
  return (
    <Link to={`/contacts/${person.email}`}>
      <div className="col-9 info info-block">
        <InfoItem infoText="Title" info={person.name.title} />
        <InfoItem infoText="Phone" info={person.phone} />
        <InfoItem infoText="Cell phone" info={person.cell} />
        <InfoItem infoText="Email" info={person.email} />
      </div>
    </Link>
)};

const formatDate = (str) => str.substring(0,10);

export default Card;