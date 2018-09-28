import React from 'react';
import BreedsItem from './BreedsItem';


const BreedsList = ({ breeds, match }) => {

  const listofBreeds = breeds.map( breed => {
    return <BreedsItem breed={breed} key={breed} match={match}  />;
  });

  return (
    <div className="list-dogs">
      <h3 className="list-dogs__title">Breeds</h3>
      <ul className="list-dogs__list">
        {listofBreeds}
      </ul>
    </div>
  );

}

export default BreedsList;

/*
 componentDidMount charge les données une fois la vue associée au rendu.
 Remplacer l'espace par un trait dans la route
*/
