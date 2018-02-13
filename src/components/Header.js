import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <div className="topbar">
        <Navbar brand="Axel React" href="./" className="light-blue accent-2" right>
          <NavItem href="./">Home</NavItem>
          <NavItem href="./About">About</NavItem>
        </Navbar>
      </div>
    );
  }
}