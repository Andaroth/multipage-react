import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

export default class Home extends Component {
  render() {
    return (
      <div className="App-home container">
        <h2>Hello this is Home</h2>
        <Row>
          <Col s={4}>
            <ul className="card pink p-20">
              <h4>Chapters</h4>
              <li><a href="#one">Paragraph 1</a></li>
              <li><a href="#two">Paragraph 2</a></li>
              <li><a href="#three">Paragraph 3</a></li>
              <li><a href="#four">Paragraph 4</a></li>
              <li><a href="#five">Paragraph 5</a></li>
            </ul>
          </Col>
          <Col s={8}>
            <h3>Lorem</h3>
            <p id="one">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tincidunt nibh, at tincidunt odio vestibulum cursus. Quisque sed ornare turpis, eget efficitur diam. Fusce vulputate, est non cursus pharetra, ante est volutpat enim, et rhoncus ipsum ex eget velit. Cras scelerisque fermentum ante, at consequat mi ultricies at. Vestibulum condimentum, neque eget eleifend molestie, leo sem commodo libero, eu imperdiet sapien metus eu sapien. Sed est mauris, rutrum ut augue eget, suscipit porta velit. Etiam tristique malesuada ex, et sollicitudin turpis posuere sed. Aenean sit amet convallis velit. </p>
            <h3>Ipsum</h3>
            <p id="two">Etiam egestas semper nisi. Sed dolor ante, elementum non neque faucibus, posuere consectetur sapien. Vestibulum lacinia, velit et feugiat posuere, sapien mauris pellentesque enim, a pretium lacus neque sed tortor. Cras quis commodo leo. Suspendisse tincidunt, felis ut elementum luctus, mi tellus cursus est, eget condimentum purus justo quis justo. Ut nec ultrices dolor. Cras tempus eros id ex consectetur, sit amet dignissim arcu scelerisque. Nulla facilisi. </p>
            <h3>Dolor</h3>
            <p id="three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla nisl sed risus hendrerit, at consequat orci ullamcorper. Sed tempus nisl sit amet augue pharetra, vitae facilisis quam pretium. Nam sit amet nisl ut magna commodo tincidunt eget eu purus. Cras sed metus id tortor placerat cursus. Donec suscipit nec est vel posuere. Ut suscipit sodales dolor, vel fermentum lacus lacinia ut. Nulla mauris quam, maximus ac risus sed, laoreet dapibus ipsum. Nunc tempor eu ex eu elementum. Integer sollicitudin dapibus aliquet. Suspendisse quis elit ante. Morbi placerat volutpat maximus.</p>
            <h3>Sit</h3>
            <p id="four">Duis laoreet lacus sem, non laoreet lorem tempus non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque maximus est cursus feugiat fermentum. Morbi aliquam sit amet massa id varius. Pellentesque elementum vitae ligula id rutrum. Suspendisse pulvinar ipsum dolor, eu bibendum odio commodo a. Sed semper sapien sed turpis venenatis posuere. Suspendisse potenti. Fusce venenatis dui eget viverra porttitor. Sed semper, arcu in consectetur sodales, nisl sem varius sapien, in egestas tellus ante vitae leo. Aliquam sit amet porta erat. Maecenas cursus ultrices tellus a convallis. </p>
            <h3>Amet</h3>
            <p id="five">Pellentesque maximus elit at purus imperdiet, eu laoreet felis imperdiet. Nullam tincidunt dignissim ullamcorper. Donec id lacus ac est eleifend mollis. Nulla sed justo eget nulla semper maximus et sed eros. Maecenas pellentesque erat at nibh porta, et posuere purus condimentum. Suspendisse ut lacus ac erat dapibus placerat vitae sit amet est. Morbi feugiat urna sit amet tellus imperdiet blandit. Ut id porttitor dui, vel molestie arcu. Nulla sapien sapien, volutpat eget mattis ut, dignissim dignissim justo. Nunc tincidunt sagittis auctor. Donec luctus mauris quis iaculis tincidunt. Nulla id quam sit amet libero faucibus commodo. Praesent auctor quam vitae turpis bibendum efficitur. Donec tincidunt, orci ac imperdiet pretium, lacus lacus venenatis est, eget vulputate ante ex non velit. Donec quis ipsum aliquet, vestibulum urna ac, tristique ipsum. Donec gravida justo eget felis pellentesque hendrerit. </p>
          </Col>
        </Row>
      </div>
    );
  }
}
