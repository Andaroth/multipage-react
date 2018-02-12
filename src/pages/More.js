import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';

export default class More extends Component {
  render() {
    return (
      <div className="App-more PageContent card">
        <h2>Hello this is More</h2>
        <div className="row">
          <div className="column col6 sided">
            <img src={logo} alt="Placeholder picture"></img>
          </div>
          <div className="column col6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tincidunt nibh, at tincidunt odio vestibulum cursus. Quisque sed ornare turpis, eget efficitur diam. Fusce vulputate, est non cursus pharetra, ante est volutpat enim, et rhoncus ipsum ex eget velit. Cras scelerisque fermentum ante, at consequat mi ultricies at. Vestibulum condimentum, neque eget eleifend molestie, leo sem commodo libero, eu imperdiet sapien metus eu sapien. Sed est mauris, rutrum ut augue eget, suscipit porta velit. Etiam tristique malesuada ex, et sollicitudin turpis posuere sed. Aenean sit amet convallis velit. </p>
            <p>Pellentesque maximus elit at purus imperdiet, eu laoreet felis imperdiet. Nullam tincidunt dignissim ullamcorper. Donec id lacus ac est eleifend mollis. Nulla sed justo eget nulla semper maximus et sed eros. Maecenas pellentesque erat at nibh porta, et posuere purus condimentum. Suspendisse ut lacus ac erat dapibus placerat vitae sit amet est. Morbi feugiat urna sit amet tellus imperdiet blandit. Ut id porttitor dui, vel molestie arcu. Nulla sapien sapien, volutpat eget mattis ut, dignissim dignissim justo. Nunc tincidunt sagittis auctor. Donec luctus mauris quis iaculis tincidunt. Nulla id quam sit amet libero faucibus commodo. Praesent auctor quam vitae turpis bibendum efficitur. Donec tincidunt, orci ac imperdiet pretium, lacus lacus venenatis est, eget vulputate ante ex non velit. Donec quis ipsum aliquet, vestibulum urna ac, tristique ipsum. Donec gravida justo eget felis pellentesque hendrerit. </p>
          </div>
        </div>
      </div>
    );
  }
}