import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    return(
        <div className="cards-container">
            {
            robots.map((user, i) => {
                return <Card i= {i} key={robots[i].id} id={i+1} name={robots[i].name} type={robots[i].types}/>
            })
            }
        </div>
    );
}
 
export default CardList; 