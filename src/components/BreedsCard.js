import React, { Component } from 'react';
import { transformResult } from '../libraries/tools';
import axios from 'axios';

class BreedsCard extends Component {

  state = {
    picture: ''
  }

  componentDidMount() {
    const { match } = this.props;
    const breedFormated = transformResult(match.params.breed);

    axios.get(`https://dog.ceo/api/breed/${breedFormated}images/random`)
      .then(res => {
        this.setState({picture: res.data.message});
    })

    this.hidePagination();
  }

  hidePagination() {
    const { hidePagination = f => f} = this.props;
    hidePagination(false);
  }

  render() {
    const { match } = this.props;
    const { picture } = this.state;

    return (
      <div className="card-dog">
        <h3 className="card-dog__title">{match.params.breed}</h3>
        <div className="card-dog__image-container">
          <img className="card-dog__image" src={picture} alt={match.params.breed} />
        </div>
      </div>
    );
  }

}
export default BreedsCard;
