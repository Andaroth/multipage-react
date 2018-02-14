import React, { Component } from 'react';
import logo from '../assets/img/react.svg';
import { 
  Row, Col, 
  Parallax, 
  Button } from 'react-materialize';
import paralOne from '../assets/img/keyb.jpg';

export default class More extends Component {
  render() {
    return (
      <div className="App-more">
        <Parallax imageSrc={paralOne} />
        <main className="container">
          <Row>
            <Col m={12}>
              <h1>About this website</h1>
            </Col>
            <Col s={12} m={6}>
              <p>This website has been created with <strong>React</strong>. <br/>It is really useful to create web applications easily and as fast as thunder. </p>
              <p>Point of this project is to improve my skills in ReactJS and handling <strong>Materialize</strong>. I made my own jQuery functions and my own CSS selectors. Styles are input in SASS because I like to work with it. </p>
              <p>I also used <strong>React-Materialize</strong> so I don't need to make the whole project's CSS. </p>
              <p>I finally installed the <strong>gh-pages</strong> package so I can deploy the website online.</p>
              <p>If you want to talk about it, you should try sending me an email :</p>
              <Button href="mailto:contact@axelfiolle.be" waves="light" node="a">Contact me</Button> or <a href="./">Return to homepage</a>
            </Col>
            <Col s={12} m={6}>
              <img src={logo} alt="Placeholder"></img>
            </Col>
          </Row>
        </main>
      </div>
    );
  }
}