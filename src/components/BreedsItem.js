import React from 'react';
import { Link } from 'react-router-dom';


const BreedsItem = ({ breed, match }) => (
  <div>
    <li>
      <Link to={`${match.url}/${breed}`}>
        <p>{breed}</p>
      </Link>
    </li>
  </div>
);


export default BreedsItem;
