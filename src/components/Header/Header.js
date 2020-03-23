import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className="header container">
        <h4 className="header-logo">StarDB</h4>
        <ul className="menu-list">
          <li className="menu-list-item">People</li>
          <li className="menu-list-item">Planets</li>
          <li className="menu-list-item">Starships</li>
        </ul>
      </div>
    );
  }
}

export default Header;