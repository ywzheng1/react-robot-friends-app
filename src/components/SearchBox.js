import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='pa2'>
            <input 
                className='search-box'
                type='search' 
                placeholder='search Pokémon'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;