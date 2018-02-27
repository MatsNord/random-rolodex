import React from 'react';
import {Link} from 'react-router-dom';
import Name from './../name/name';
import InfoItem from './../info/infoItem';
import EmailItem  from './../info/emailItem';
import FullInfo from './full-info';
import ListInfo from './list-info';
import Styles from './card.css';



const Card = ({person, fullInfo}) => {  
  const imgSize = fullInfo ? 'large' : 'medium';

  // TODO: Create utility/component for date formatting  
  //full-heigth
  return (
    <div className={`card ${fullInfo ? 'full-height' : ''}`}>
      <div className={`header ${fullInfo ? '' : ' lower'}`}>
        <h1><Name className={Styles.name} name={person.name.first} /> <Name className={Styles.name} name={person.name.last} />
        
        { !fullInfo &&
        <Link to={`/contacts/${person.email}`}> 
          <span className="details-nav">
          <i>View profile ...</i>
          </span>
        </Link> 
      }
        </h1>
      </div>
      <div className="row card-content">
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

export default Card;