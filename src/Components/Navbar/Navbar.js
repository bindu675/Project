import React, { Component } from 'react';
import './Navbar.css';
import logo from './img.jpg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <img className="logo2" src={logo}></img>
            <a  className="nav1" href='#User'>User</a>
            <a className="nav2" href='/LoginPage'>Signout</a>
        </div>
      </div>
    );
  }
}

export default Navbar;