import React, { Component } from 'react';
import { Footer } from 'react-materialize';

export default class AllFooter extends Component {
  render() {
    return (
      <div className="Footer">
        <Footer copyrights="&copy; 2018 Axel Fiolle"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="https://axelfiolle.be/" target="_blank">Developer's website</a>
          }
          links={
            <ul>
              <h5 className="white-text">Friend links</h5>
              <li><a className="grey-text text-lighten-3" href="https://puissance.space/" target="_blank">Puissance.Space</a></li>
              <li><a className="grey-text text-lighten-3" href="http://agenceduweb.be/" target="_blank">Agence Du Web</a></li>
              <li><a className="grey-text text-lighten-3" href="http://smartentrepreneuriat.com/" target="_blank">SmartEntrepreneuriat</a></li>
            </ul>
          }
          className="deep-purple darken-3"
        >
            <h5 className="white-text">This website</h5>
            <p className="grey-text text-lighten-4">This website is made with Materialize and React.</p>
            <p className="grey-text text-lighten-4">You can discover it's source code on <a href="https://github.com/Andaroth/multipage-react" target="_blank">GitHub</a>. </p>
        </Footer>
      </div>
    );
  }
}