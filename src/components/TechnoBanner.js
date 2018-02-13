import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
import react from '../assets/img/react.svg';
import materialize from '../assets/img/materialize.svg';
import gitlogo from '../assets/img/git.png';

export default class TechnoBanner extends Component {
  render() {
    return (
        <section id="five" className="scrollspy orange">
            <Row id="stopper" className="container center-align p-20 mb-0">
            <h2>Techno<span className="nomobile">logie</span>s</h2>
            <Col s={12} m={4} className="center-align">
                <a href="https://github.com/facebook/create-react-app" className="black-text">
                <img src={react} alt="React" width="50%" height="100"/>
                <p>Made with <strong>ReactJS</strong></p>
                </a>
            </Col>
            <Col s={12} m={4} className="center-align">
                <a href="https://github.com/react-materialize/react-materialize" className="black-text">
                <img src={materialize} alt="Materialize" width="50%" height="100"/>
                <p>Also with <strong>MaterializeCSS</strong></p>
                </a>
            </Col>
            <Col s={12} m={4} className="center-align">
                <a href="https://github.com/gitname/react-gh-pages" className="black-text">
                <img src={gitlogo} alt="Materialize" width="50%" height="100"/>
                <p>And with <strong>react-gh-pages</strong></p>
                </a>
            </Col>
            <Col m={12} className="mt-20">
                <Button href="./About" waves="light" node="a">About this project</Button>
            </Col>
            </Row>
        </section>
    );
  }
}
