import React, { Component } from 'react';
import { Row, Col, Parallax, CollectionItem } from 'react-materialize';
import paralOne from '../assets/img/easy.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="App-home">
        <Parallax imageSrc={paralOne} />
        <div className="container">
          <Row>
            <Col className="offset-m4">
              <h2 >Hello this is Home</h2>
            </Col>
            <Col s={12} m={4}>
              <div className="collection" id="homeCollection">
                <CollectionItem href='#one'>Welcome</CollectionItem>
                <CollectionItem href='#two'>Who I am</CollectionItem>
                <CollectionItem href='#three'>What I do</CollectionItem>
                <CollectionItem href='#four'>Sit</CollectionItem>
                <CollectionItem href='#five'>Amet</CollectionItem>
              </div>
            </Col>
            <Col s={12} m={8}>
              <h3 id="one" className="scrollspy">Welcome</h3>
              <p>Welcome on this no-point website. My name is <strong>Axel Fiolle</strong>, aka <strong>Andaroth</strong>. <br/>This exists because I really needed to train myself with <strong>React</strong> as I need to improve my skills for internship purpose. </p>
              <h3 id="two" className="scrollspy">Who I am</h3>
              <p>I'm a young web developer. I'm 25 and I know coding since I'm like 12. <br/>I started coding because I wanted to discover more stuff about computering and I wanted to make my own games. <br/>I first discover RPG Maker. Then RPG Maker XP which allowed us to edit project's scripts in <strong>Ruby</strong>RGSS3. Then I grew a big interest for programmation. I started <strong>C/C++</strong> at first but it was too complicated and I was lazy. <br/>After years, all this made me become a <strong>web-oriented full-stack developer</strong>. </p>
              <h3 id="three" className="scrollspy">What I do</h3>
              <p>I mostly like to code front-end stuff. I spent years and years discovering barely all the HTML(5 now) and CSS(3) possibilites. I recently started to learn React so I'll be able to create web applications. This page is an exemple of what I can actually do in React right now with my present skills. </p>
              <h3 id="four" className="scrollspy">Sit</h3>
              <p>Duis laoreet lacus sem, non laoreet lorem tempus non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque maximus est cursus feugiat fermentum. Morbi aliquam sit amet massa id varius. Pellentesque elementum vitae ligula id rutrum. Suspendisse pulvinar ipsum dolor, eu bibendum odio commodo a. Sed semper sapien sed turpis venenatis posuere. Suspendisse potenti. Fusce venenatis dui eget viverra porttitor. Sed semper, arcu in consectetur sodales, nisl sem varius sapien, in egestas tellus ante vitae leo. Aliquam sit amet porta erat. Maecenas cursus ultrices tellus a convallis. </p>
              <h3 id="five" className="scrollspy">Amet</h3>
              <p>Pellentesque maximus elit at purus imperdiet, eu laoreet felis imperdiet. Nullam tincidunt dignissim ullamcorper. Donec id lacus ac est eleifend mollis. Nulla sed justo eget nulla semper maximus et sed eros. Maecenas pellentesque erat at nibh porta, et posuere purus condimentum. Suspendisse ut lacus ac erat dapibus placerat vitae sit amet est. Morbi feugiat urna sit amet tellus imperdiet blandit. Ut id porttitor dui, vel molestie arcu. Nulla sapien sapien, volutpat eget mattis ut, dignissim dignissim justo. Nunc tincidunt sagittis auctor. Donec luctus mauris quis iaculis tincidunt. Nulla id quam sit amet libero faucibus commodo. Praesent auctor quam vitae turpis bibendum efficitur. Donec tincidunt, orci ac imperdiet pretium, lacus lacus venenatis est, eget vulputate ante ex non velit. Donec quis ipsum aliquet, vestibulum urna ac, tristique ipsum. Donec gravida justo eget felis pellentesque hendrerit. </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
