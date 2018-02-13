import React, { Component } from 'react';
import materialize from '../assets/img/materialize.svg';
import { Parallax } from 'react-materialize';

import paralOne from '../assets/img/die.png';

export default class More extends Component {
  render() {
    return (
      <div className="App-notfound">
        <Parallax imageSrc={paralOne} />
        <div className="container">
          <div className="card center-align">
            <h2>Hello this is 404</h2>
            <p>The page you asked for cannot be found, you should try to <a href="./">get back home</a></p>
            <a href="./"><img src={materialize} alt="Placeholder"/></a>
          </div>
        </div>
      </div>
    );
  }
}