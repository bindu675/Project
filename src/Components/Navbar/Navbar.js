import React, { Component } from 'react';
import './Navbar.css';
import logo from './img.jpg';
import Cookies from "js-cookie"
import axios from "axios"
import BrowserHistory from '../Utils/BrowserHistory';


class Navbar extends Component {
  state={
    User:[],
    employeename:''
    
  }

  componentDidMount(){

    if(sessionStorage.getItem('role')=='user')
    {
      this.setState({hide:true})
    }
    else if (sessionStorage.getItem('role')=='admin')
    {
      this.setState({show:true})
    }
  }

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
  Logout=()=>{
    sessionStorage.setItem('authentication', "")
    sessionStorage.setItem('Firstname', "")
    Cookies.remove('Firstname'); // fail!
    BrowserHistory.push('/LoginPage'); 

   }  
  render() {
    return (
      <div>
        <div className="navbar">
          <img className="logo2" src={logo}></img>
          <a hidden={this.state.hide} className="nav1" href='#'></a>
           <a hidden={this.state.show} className="nav1" href='#'>{this.state.employeename}</a> 
           {/* <a className="nav2" href='/LoginPage'>Signout</a>  */}
           <button id="logbtn" onClick={this.Logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Navbar;