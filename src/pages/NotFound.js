import React, { Component } from 'react';

export default class More extends Component {
  render() {
    return (
      <div className="App-notfound PageContent card">
        <h2>Hello this is 404</h2>
        <p>The page you asked for cannot be found, you should try to <a href="./">get back home</a></p>
      </div>
    );
  }
}