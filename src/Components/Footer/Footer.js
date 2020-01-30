import React, { Component } from 'react';
import './Footer.css';
import logo from '../Navbar/imgcloud.jpg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h6 className="header3">contact us | privacy policy | Terms of service</h6>
        <img className="logo3" src={logo}></img>
        <p className="para">powered by</p>
        <p className="para1">HR</p>
      </div>
    );
  }
}

export default Footer;