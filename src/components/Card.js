import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className="photos" alt="robot" src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card; 