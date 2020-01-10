import React from 'react';
import { connect } from 'react-redux';
import './AdminLogin.css';
import logo from '../Navbar/img.jpg'
import logo1 from '../Navbar/imglock.png'
import logo2 from '../Navbar/humanimg.png'
import { SocialIcon } from 'react-social-icons';
// import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
const axios = require('axios');
// import { LoginAction } from '../Action/LoginAction';

class AdminLogin extends React.Component {
  
//   constructor() {
//     super();
//     this.state = {
//       fields: {},
//       errors: {}
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submituserLoginForm = this.submituserLoginForm.bind(this);

//   };
//   handleChange(e) {
//     debugger
//     let fields = this.state.fields;
//     fields[e.target.name] = e.target.value;
//     this.setState({
//       fields
//     });

//   }
//   submituserLoginForm(e) {
//     debugger  
//     e.preventDefault();
//     if (this.validateForm()) {
//         let fields = {};
//         fields["EmployeeNo"] = "";
//         fields["password"] = "";
//         this.setState({fields:fields});
//         alert("Form submitted");
//     }

//   }

//   validateForm() {
// debugger
//     let fields = this.state.fields;
//     let errors = {};
//     let formIsValid = true;

//     if (!fields["EmployeeNo"]) {
//       formIsValid = false;
//       errors["EmployeeNo"] = "*Please enter your EmployeeNo.";
//     }

//     if (typeof fields["EmployeeNo"] !== "undefined") {
//       //regular expression for email validation
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(fields["EmployeeNo"])) {
//         formIsValid = false;
//         errors["EmployeeNo"] = "*Please enter valid EmployeeNo.";
//       }
//     }
//     if (!fields["password"]) {
//       formIsValid = false;
//       errors["password"] = "*Please enter your password.";
//     }

//     if (typeof fields["password"] !== "undefined") {
//       if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//         formIsValid = false;
//         errors["password"] = "*Please enter secure and strong password.";
//       }
//     }
//     this.setState({
//       errors: errors
//     });
//     return formIsValid;
//   }
  
  login(){
    debugger
    const options = {
      url: 'http://localhost:9001/admin_login',
      method: 'POST',
     data: {
      EmployeeNo:"QW01",
      password:"@hRsi02"
      }
    };
    
    axios(options)
    console.log("hi")
  //   axios.post('http://localhost:9001/admin_login',{
  //     EmployeeNo:"QW01",
  //     password:"@hRsi02"
  //   })
  // .then(function (response) {
  //   // handle success
  //   console.log(response);BrowserHistory.push("/Admin");
  // })
    
    }
  render() {
    return (
      <div className="logPage">
        <div>
          <Navbar/>
        </div>
        <img className="logo1" src={logo}></img>
        <h3 className="login1">Login</h3>
        <form>
          <label className="emp"></label>
          <img className="humanimg" src={logo2}></img>
            <input className="emp1" type="text" name="employeename" placeholder=" EmployeeNo"/><br></br>
                {/* <div>Username is required</div> */}
                    
          <label className="pwd"></label>
          <img className="lockimg" src={logo1}></img>
            <input className="pwd1"  type="password" name="password"  placeholder="password" /><br></br>
                {/* <div>Password is required</div> */}   
                <button className="login" onClick={this.login}>Login</button>
                <p className="header1">or forgot Password</p>
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

export default AdminLogin;
