import React, { Component } from 'react';
import './Navbar.css';
import logo from './img.jpg';
import Cookies from "js-cookie"
import axios from "axios"


class Navbar extends Component {
  state={
    User:[],
    employeename:''
    
  }

  // componentDidMount(){

  //   if(sessionStorage.getItem('role')=='user')
  //   {
  //     this.setState({hide:true})
  //   }
  //   else if (sessionStorage.getItem('role')=='admin')
  //   {
  //     this.setState({show:true})
  //   }
  // }

  componentDidMount() {
    debugger;
    axios.get('http://localhost:9001/Desktop')
      .then(response => {
        debugger
        this.setState({Users: response.data});
      })
      .catch(function (error) {
      console.log(error);
      })
      // console.log(Cookies.get("Firstname"))
       var name=Cookies.get('Firstname');
       this.setState({employeename:name})
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <img className="logo2" src={logo}></img>
          <a hidden={this.state.hide} className="nav1" href='#'>User</a>
           <a hidden={this.state.show} className="nav1" href='#'>Admin{this.state.employeename}</a> 
           <a className="nav2" href='/LoginPage'>Signout</a> 
        </div>
      </div>
    );
  }
}

export default Navbar;