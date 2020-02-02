import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    return(
        <div className="cards-container">
            {
            robots.map((user, i) => {
                const pokeUrl = robots[i].url
                const pokeIndex = pokeUrl.split("/")[6]
                return <Card i= {i} key={robots[i].name} id={pokeIndex} name={robots[i].name} url={robots[i].url}/>
            })
            }
        </div>
    );
}
  
export default CardList; 