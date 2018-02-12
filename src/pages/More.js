import React, { Component } from 'react';

export default class More extends Component {
  render() {
    return (
      <div className="App-more PageContent card">
        <h2>Hello this is More</h2>
        <div className="row">
          <div className="column col6">
            <p>Moitié</p>
          </div>
          <div className="column col6">
            <p>Moitié</p>
          </div>
        </div>
      </div>
    );
  }
}