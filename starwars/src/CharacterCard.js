import React from 'react';

const CharacterCard = ( {starwarsChar} ) => {
    return(
        <div>
            <div> name: {starwarsChar.name} </div>
            <div> birthyear: {starwarsChar.birth_year} </div>
            <div> gender: {starwarsChar.gender} </div>
      </div>
    );
}

export default CharacterCard;