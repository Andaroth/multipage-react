import React, { Component } from 'react';
import {Navbar,NavItem,Icon} from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <div className="topbar">
        <Navbar brand="Anda React" className="deep-purple" right>
          <NavItem href="./">Home</NavItem>
          <NavItem href="./About">About</NavItem>
          <NavItem href="./404">404 page</NavItem>
          <NavItem href='./nope'><Icon>search</Icon></NavItem>
        </Navbar>
      </div>
    );
  }
}