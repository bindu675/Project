import React from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import logo from './Navbar/img.jpg'
import logo1 from '../Components/Navbar/imglock.png';
import logo2 from './Navbar/humanimg.png';
import { SocialIcon } from 'react-social-icons';
// import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import BrowserHistory from "./Utils/BrowserHistory";
import {loginHandle} from '../Action/LoginAction';
import Cookies from "js-cookie"
import axios from "axios"
class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    employeeNo: '',
    password: '',
    employeeNoError: '',
    passwordError: ''
    };
  
    
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        }
    onHandleClicksCancel = (e) => {
    // BrowserHistory.push('/HomePage'); 
    }
    
    
    onHandleClick = (e) => {
    e.preventDefault();
    const payload = {
    EmployeeNo: this.state.employeeNo,
    password: this.state.password
    }
    console.log(payload)
    
    if (this.state.employeeNo.length === 0 && this.state.password.length === 0 ) {
    this.setState({
    employeeNoError: "employeeNo is required",
    passwordError: "Password is required"
    
    })
    }
    else if (this.state.employeeNo.length === 0) {
    this.setState({ employeeNoError: "employeeno is required" })
    }
    else if (this.state.password.length === 0) {
    this.setState({ passwordError: "Password is required" })
    }
    else if (!this.state.employeeNo.match(/^[A-Z0-9]{4,5}$/)) {
    this.setState({employeeNoError: "Please enter the valid employeeno." })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
    this.setState({ passwordError: "" })
    }
   
    const options = {
      url: 'http://localhost:9001/user_login',
      method: 'POST',
      
      data: payload
      };
      axios(options)
      .then(response => {
      console.log(response.status);
      sessionStorage.setItem('authentication', response.data.token)
      sessionStorage.setItem('Firstname', response.data.Firstname)
      Cookies.set('Firstname', response.data.Firstname);
      console.log(Cookies.get("Firstname"))
      BrowserHistory.push('/HomePage')
    });
  }
    
  render() {
    return (
      <div className="logPage">
        <div>
          <Navbar/>
        </div>
        <p className="paraleave1">Leave Management System</p>
        <img className="logo1" src={logo}></img>
        <h3 className="login1">Login</h3>
        <form>
          <label className="emp"></label>
          <img className="humanimg" src={logo2}></img>
          <input className="emp1"  type="text" name="employeeNo" onChange={this.onHandleChange}  placeholder="EmployeeNo"/><br></br> 
          <p className='red'>{this.state.employeeNoError}</p> 

          <label className="pwd"></label>
          <img className="lockimg" src={logo1}></img>
          <input className="pwd1"  type="password" name="password" onChange={this.onHandleChange}  placeholder="password" /><br></br>
          <p className='red'>{this.state.passwordError}</p>

          <button className="login" onClick={this.onHandleClick}>Login</button>
          {/* <p className="header1">or forgot Password</p> */}
          <p className="header2">or sign in with</p>
        </form>
        <div className="icons">       
         <SocialIcon className="icons" url="http://twitter.com/jaketrent" />
         <SocialIcon className="icons" url="http://facebook.com/jaketrent" />
         <SocialIcon className="icons" url="http://google.com/jaketrent" />
      </div>
      <div className="footer6">
        <Footer/>
      </div>
     
      </div>
    )
    } 
}
const mapStateToProps=(state)=>{
  const {password,employeeNo }=state.LoginReducer
  return {password,employeeNo }
}
export default connect(mapStateToProps,{loginHandle}) (LoginPage);
