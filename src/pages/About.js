import React, { Component } from 'react';
import logo from '../assets/img/react.svg';
import { Row, Col, Parallax } from 'react-materialize';
import paralOne from '../assets/img/keyb.jpg';

export default class More extends Component {
  render() {
    return (
      <div className="App-more">
        <Parallax imageSrc={paralOne} />
        <div className="container">
          <Row>
            <Col m={12}>
              <h2>About this website</h2>
            </Col>
            <Col s={12} m={6}>
              <p>This website has been created with React. <br/>It is really useful to create web applications easily and as fast as thunder. </p>
              <p>Point of this project is to improve my skills in ReactJS and handling Materialize. I made my own jQ functions and my own CSS selectors. Styles are input in SASS because I like to work with it. </p>
              <p>I also used React-Materialize so I don't need to make the whole project's CSS. </p>
            </Col>
            <Col s={12} m={6}>
              <img src={logo} alt="Placeholder"></img>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}