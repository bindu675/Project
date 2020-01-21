import React from 'react';
import { connect } from 'react-redux';
import './AdminLogin.css';
import logo from '../Navbar/img.jpg'
import logo1 from '../../Components/Navbar/imglock.png';
import logo2 from '../Navbar/humanimg.png';
import { SocialIcon } from 'react-social-icons';
// import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
import axios from "axios"
import { loginHandle } from '../../Action/LoginAction';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeNo: '',
      password: '',
      employeeNoError: '',
      passwordError: ''
    };

  }
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

    if (this.state.employeeNo.length === 0 && this.state.password.length === 0) {
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
      this.setState({ employeeNoError: "Please enter the valid employeeNo" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ passwordError: "Please enter the valid password" })
    }

    const options = {
      url: 'http://localhost:9001/admin_login',
      method: 'POST',
      data: payload
    };
    axios(options)
      .then(response => {
        console.log(response.status);
        sessionStorage.setItem('authentication', response.data.token)
        sessionStorage.setItem('userEmail', response.data.email)
        BrowserHistory.push('/Admin')
      });
  }


  render() {
    return (
      <div className="logPage">
        <div>
          <Navbar />
        </div>
        <img className="logo1" src={logo}></img>
        <h3 className="login1">Login</h3>
        <form>
          <label className="emp"></label>
          <img className="humanimg" src={logo2}></img>
          <input className="emp1" type="text" name="employeeNo" onChange={this.onHandleChange} placeholder="EmployeeNo" /><br></br>
          <p className='red'>{this.state.employeeNoError}</p>

          <label className="pwd"></label>
          <img className="lockimg" src={logo1}></img>
          <input className="pwd1" type="password" name="password" onChange={this.onHandleChange} placeholder="password" /><br></br>
          <p className='red'>{this.state.passwordError}</p>

          <button className="login" onClick={this.onHandleClick}>Login</button>
          <p className="header1">or forgot Password</p>
          <p className="header2">or sign in with</p>
        </form>
        <div className="icons">
          <SocialIcon className="icons" url="http://twitter.com/jaketrent" />
          <SocialIcon className="icons" url="http://facebook.com/jaketrent" />
          <SocialIcon className="icons" url="http://google.com/jaketrent" />
        </div>
        <div className="footer6">
          <Footer />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { password, employeeNo } = state.LoginReducer
  return { password, employeeNo }
}
export default connect(mapStateToProps, { loginHandle })(AdminLogin);
