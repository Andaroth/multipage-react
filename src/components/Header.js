import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <h1>Axel Fiolle</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/More">More</Link></li>
              <li><Link to="/NotFound">NotFound</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}