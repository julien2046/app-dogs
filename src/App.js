import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import axios from 'axios';
import { formatObject } from './libraries/tools';

import Pagination from './Nav/Pagination';
import Nav from './Nav/Nav';
import BreedsList from './components/BreedsList';
import BreedsCard from './components/BreedsCard';


class App extends Component {

  state = {
    breeds: [],
    currentBreeds: [],
    currentPage: null,
    totalPages: null,
    pagination: true
  }

  componentDidMount() {

    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.setState({breeds: formatObject(res.data.message)})
      });

      this.setState({pagination: true});
  }

  onPageChanged = data => {
    const { breeds } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentBreeds = breeds.slice(offset, offset + pageLimit);

    this.setState({currentPage, currentBreeds, totalPages});
  }

  hidePagination = data => {
    this.setState({pagination: data});
  }

  render() {
    const { breeds, currentBreeds, pagination } = this.state;
    const currentPath = window.location.pathname;
    let redirect = false;
    if (currentPath === '/') redirect = true;

    const totalBreeds = breeds.length;
    if (totalBreeds === 0) return null;

    return (
      <div>
        <Nav hidePagination={this.hidePagination} />
        <Route
          exact
          path="/breeds"
          render={props =>(
            <BreedsList breeds={currentBreeds} {...props} />
          )}
         />
        <Route
          path={`/breeds/:breed`}
          render={props =>(
            <BreedsCard hidePagination={this.hidePagination} {...props} />
          )}
        />
        {
          redirect && <Redirect from="/" to="/breeds"/>
        }
        {pagination &&
          <Pagination
            totalRecords={totalBreeds}
            pageLimit={6}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        }
      </div>
    );
  }
}

export default App;
