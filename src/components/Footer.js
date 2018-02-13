import React, { Component } from 'react';
import { Footer } from 'react-materialize';

export default class AllFooter extends Component {
  render() {
    return (
      <div className="Footer">
        <Footer copyrights="&copy; 2018 Axel Fiolle"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="https://axelfiolle.be/">Developer's website</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://puissance.space/">Puissance.Space</a></li>
              <li><a className="grey-text text-lighten-3" href="http://agenceduweb.be/">Agence Du Web</a></li>
              <li><a className="grey-text text-lighten-3" href="http://smartentrepreneuriat.com/">SmartEntrepreneuriat</a></li>
              
            </ul>
          }
          className="deep-purple darken-3"
        >
            <h5 className="white-text">This website</h5>
            <p className="grey-text text-lighten-4">This website is made with Materialize and React.</p>
        </Footer>
      </div>
    );
  }
}