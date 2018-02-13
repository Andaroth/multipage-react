import React, { Component } from 'react';
import TechnoBanner from '../components/TechnoBanner';
import { Row, Col, Parallax, CollectionItem, Collapsible, CollapsibleItem, Button } from 'react-materialize';
import paralOne from '../assets/img/easy.jpg';
import bubbleGum from '../assets/img/gum.jpg';

export default class Home extends Component {
  render() {
    return (
      <main className="App-home">
        <Parallax imageSrc={paralOne} />
        <div className="titlesection amber center-align m-0">
          <a href="#one" className="white-text"><h1><span className="hidden">Discover </span>My first React website</h1></a>
        </div>
        <Row className="container">
          <Col s={12} m={4}>
            <h2 className="hidden">Chapters</h2>
            <div className="collection" id="homeCollection">
              <CollectionItem node="li" href='#one'>Welcome</CollectionItem> 
              <CollectionItem node="li" href='#two'>Who I am</CollectionItem> 
              <CollectionItem node="li" href='#three'>What I do</CollectionItem> 
              <CollectionItem node="li" href='#four'>My story</CollectionItem> 
              <CollectionItem node="li" href='#five'>Technos used</CollectionItem> 
            </div>
          </Col>
          <Col node="main" s={12} m={8}>
            <section id="one" className="scrollspy">
              <h3>Welcome</h3>
              <p>Welcome on this no-point website. My name is <strong>Axel Fiolle</strong>, aka <strong>Andaroth</strong>. <br/>This exists because I really needed to train myself with <strong>React</strong> as I need to improve my skills for internship purpose. </p>
            </section>
            <section id="two" className="scrollspy">
              <h3>Who I am</h3>
              <p>I'm a young web developer. I'm 25 and I know coding since I'm like 12. <br/>I started coding because I wanted to discover more stuff about computering and I wanted to make my own games. <br/>I first discover RPG Maker. Then RPG Maker XP which allowed us to edit project's scripts in <strong>Ruby</strong>RGSS3. Then I grew a big interest for programmation. I started <strong>C/C++</strong> at first but it was too complicated and I was lazy. <br/>After years, all this made me become a <strong>web-oriented full-stack developer</strong>. </p>
            </section>
            <section id="three" className="scrollspy">
              <h3>What I do</h3>
              <p>I mostly like to code front-end stuff. I spent years and years discovering barely all the HTML(5 now) and CSS(3) possibilites. I recently started to learn React so I'll be able to create web applications. This page is an exemple of what I can actually do in React right now with my present skills. </p>
            </section>
            <section id="four" className="scrollspy">
              <h3>My story</h3>
              <Collapsible popout defaultActiveKey={0}>
                <CollapsibleItem header='First steps with HTML and CSS' icon='polymer'>
                  <p>I wrote my first HTML line when I was very young, around twelve years old. I used a software named Nvu which allowed me to do What-You-See-Is-What-You-Get early and learn HTML/CSS basics from it.</p>
                  <p>I decided to learn coding seriously later with SiteDuZero (which became OpenClassroom). I also discovered PHP but we'll talk about it later. </p>
                  <p>Serious business started when I was at <strong>High School Albert Jacquard</strong> where I learnt <strong>HTML5</strong> and <strong>CSS3</strong>. </p>
                  <p>Now I'm barely a master in HTML5 and CSS3. When I work without any framework, my code is always 100% valid with the <strong>W3C</strong>'s standards.</p>
                </CollapsibleItem>
                <CollapsibleItem header='The first PHP project' icon='settings_ethernet'>
                  <p>I discovered PHP years ago, I made a <strong>blogroll</strong> (with a backend to post new stuff with a form, very nice) by myself when I was like fourteen. <br/>I always kept working in PHP even in front-end because I liked to include components this way. </p>
                  <p>Now I'm seriously training to work with <strong>MVC</strong> architecture.</p>
                </CollapsibleItem>
                <CollapsibleItem header='Getting introduce to JavaScript' icon='movie_filter'>
                  <p>I started to make my first own JS lines when I was at High School. We discovered it mostly with <strong>jQuery</strong> but I learnt to do <strong>vanilla JavaScript</strong> too. </p>
                  <p>I must admit that I like coding with jQuery more than JS because it allows me to focus on the action itself instead of the process hidden behind. (Yes I'm still a front-end hearted developer)</p>
                </CollapsibleItem>
                <CollapsibleItem header='Discover the power of NodeJS' icon='share'>
                  <p>I really like NodeJS, I love how it works. It's like making it's own Apache, it's own SMTP, it's own everything. <br/>I started learning NodeJS at BeCode in Bruxelles. </p>
                  <p>I trained my Node skills making <strong>http servers</strong>, <strong>webchats</strong>, stuff like that.</p>
                </CollapsibleItem>
                <CollapsibleItem header='Falling in love with Symfony' icon='folder_special'>
                  <p>I love it. This is the best way to work with PHP. <br/>I really feel like it totally fits with the way I was working before discovering it, making my own MVC architecture. </p>
                  <p>I discovered it recently because I needed it for an internship. I keet working with it because it rules. </p>
                </CollapsibleItem>
                <CollapsibleItem header='Now learning React' icon='blur_circular'>
                  <p>This is a great JavaScript framework. This website is made in React so <a href="mailto:contact@axelfiolle.be">tell me if it's well done</a>, please ! :D </p>
                  <div className="center-align">
                    <Button href="mailto:contact@axelfiolle.be" waves="light" node="a">Send a mail</Button>
                    <div>
                      <img src={bubbleGum} alt="Placeholder" className="p-20"  width="50%" />
                    </div>
                  </div>
                </CollapsibleItem>
              </Collapsible>
            </section>
          </Col>
        </Row>
        <TechnoBanner />
      </main>
    );
  }
}
