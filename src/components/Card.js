import React from 'react';

const Card = ({name, id, i}) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className="photos" alt={name} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
            <div>
                <h2>{name}</h2>
                <p> {i} </p>
            </div>
        </div>
    );
}

export default Card; 