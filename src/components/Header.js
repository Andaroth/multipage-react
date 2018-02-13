import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar brand='Axel Fiolle' right>
          <NavItem href="./">Home</NavItem>
          <NavItem href="./About">About</NavItem>
          <NavItem href="./NotFound">NotFound</NavItem>
        </Navbar>
      </div>
    );
  }
}