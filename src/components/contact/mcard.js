import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import * as Details from './details';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.substring(1);

const MCard = ({person}) => {
  const fullName = `Name: ${capitalize(person.name.first)} ${capitalize(person.name.last)}`;
  const {phone, cell} = person;
  console.log('persion..', person);
  return (
    <Card>
      <CardHeader
        title={fullName}
        subtitle={`Title: ${person.name.title}`}
        actAsExpander={true}
        avatar={person.picture.medium}
      />
      <CardText style={{marginLeft: '60px'}} expandable={true}>
        Phone: <Details.Phone phone={phone} />
        Cell: <Details.Phone phone={cell} />
      </CardText>
    </Card>
)};

export default MCard;