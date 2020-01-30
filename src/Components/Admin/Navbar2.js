import React, { Component } from 'react';
import './Navbar.css';
import logo from '../Navbar/img.jpg';
import Cookies from "js-cookie"
import axios from "axios"
import BrowserHistory from '../Utils/BrowserHistory';


class Navbar extends Component {
  state = {
    User: [],
    visible: false,
    employeename: '',

  }

  componentDidMount() {
    if (sessionStorage.getItem('authentication') !== '') {
      this.setState({ visible: true })
    }
    axios.get('http://localhost:9001/Desktop')
      .then(response => {
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

    var name = Cookies.get('Firstname');
    this.setState({ employeename: name })

  }
  Logout = () => {
    sessionStorage.setItem('authentication', "")
    sessionStorage.setItem('Firstname', "")
    Cookies.remove('Firstname'); // fail!
    BrowserHistory.push('/LoginPage');

  }
//   home = () => {
//     BrowserHistory.push('/HomePage');
//   }
  AdminHome=()=>{
    BrowserHistory.push('/AdminHome');
  }

  render() {
    return (
      <div>
        <div className="navbar">
         <a href="AdminHome">
          <img className="logo2" src={logo}></img>
          </a>
          {/* <button id="homebtn" hidden={!this.state.visible} onClick={this.AdminHome}>AdminHome</button> */}
          <a hidden={this.state.hide} className="nav1" href='#'></a>
          <a hidden={this.state.show} className="nav1" href='#'>{this.state.employeename}</a>
          <button hidden={!this.state.visible} id="logbtn" onClick={this.Logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Navbar;