import React from 'react';
import Card from './card';

const PersonList = ({persons}) => (
    <div>
        <div>TOOLBAR</div>
        <div className="items"> 
        { persons ? persons.map((person, idx) => <Card key={idx} person={person}/>) : null }
        </div>
    </div>
);

export default PersonList;

