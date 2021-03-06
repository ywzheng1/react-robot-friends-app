import React from 'react';

const Card = ({name, id, type, url}) => {
  
    return (
        <div className="pokecards-outer">
            <div className="pokecards-inner">
                <div className='pokecards pokecards-front'>
                    <img className="photos" alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                    <div>
                        <h2>{name}</h2>
                    </div>
                </div>
                <div className="pokecards pokecards-back">
                    <div>
                        <h2>{name}</h2>
                        <p>Pokedex #: {id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card; 