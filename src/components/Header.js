import React, { Component } from 'react';
import {Navbar,NavItem,Icon} from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar className="deep-purple" right>
          <NavItem href="./">Home</NavItem>
          <NavItem href="./About">About</NavItem>
          <NavItem href="./NotFound">NotFound</NavItem>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
        </Navbar>
      </div>
    );
  }
}