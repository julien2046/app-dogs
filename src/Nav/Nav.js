import React, { Component } from 'react';
import logo from './dog.png';

class Nav extends Component {


  render() {
    return (
      <nav>
        <a className="logo" href="/breeds">
          <img className="logo__image" src={logo} alt="logo" />
        </a>
      </nav>
    );
  }
}

export default Nav;
