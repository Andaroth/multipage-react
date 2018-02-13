import React, { Component } from 'react';
import materialize from '../assets/img/materialize.svg';
import { Parallax } from 'react-materialize';

import paralOne from '../assets/img/die.png';

export default class More extends Component {
  render() {
    return (
      <div className="App-notfound">
        <Parallax imageSrc={paralOne} />
        <main className="container">
          <div className="center-align">
            <h1>Hello this is 404</h1>
            <p>The page you asked for cannot be found, you can try to <a href="./">get back to the homepage</a>. </p>
            <p>You can also click on the picture below, it does the same thing but it looks funny.</p>
            <a href="./" className="m-20 woosh"><img src={materialize} alt="Placeholder" height="150"/></a>
          </div>
        </main>
      </div>
    );
  }
}