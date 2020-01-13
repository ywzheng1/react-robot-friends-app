import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    return(
        <div>
            {
            robots.map((user, i) => {
                if(robots[i].nationalPokedexNumber) {
                    return <Card i= {i} key={robots[i].id} id={robots[i].nationalPokedexNumber} name={robots[i].name}/>
                }
            })
            }
        </div>
    );
}
 
export default CardList; 