import React from 'react';
import InfoItem from './../info/infoItem';
import EmailItem from './../info/emailItem';

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
  )}

  const formatDate = (str) => str.substring(0,10);


  export default FullInfo;