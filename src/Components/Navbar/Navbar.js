import React, { Component } from 'react';
import './Navbar.css';
import logo from './img.jpg';
import Cookies from "js-cookie"
import axios from "axios"
import BrowserHistory from '../Utils/BrowserHistory';


class Navbar extends Component {
  state = {
    User: [],
    visible: false,
    employeename: '',
    balance: ''

  }

  // componentDidMount(){


  //   else if (sessionStorage.getItem('role')=='admin')
  //   {
  //     this.setState({show:true})
  //   }
  // }

  componentDidMount() {
    if (sessionStorage.getItem('authentication') !== '') {
      this.setState({ visible: true })
    }
    axios.get('http://localhost:9001/Desktop')
      .then(response => {
        debugger
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    // console.log(Cookies.get("Firstname"))
    var name = Cookies.get('Firstname');
    this.setState({ employeename: name })

  }
  Logout = () => {
    sessionStorage.setItem('authentication', "")
    sessionStorage.setItem('Firstname', "")
    Cookies.remove('Firstname'); // fail!
    BrowserHistory.push('/LoginPage');

  }
  home = () => {
    BrowserHistory.push('/HomePage');
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <img className="logo2" src={logo}></img>
          <button id="homebtn" hidden={!this.state.visible} onClick={this.home}>Home</button>
          <a hidden={this.state.hide} className="nav1" href='#'></a>
          <a hidden={this.state.show} className="nav1" href='#'>{this.state.employeename}</a>
          <button hidden={!this.state.visible} id="logbtn" onClick={this.Logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Navbar;