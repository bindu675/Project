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

class LoginPage extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //   password:'',
  //   employeeNo:'',
  //   passwordError:'',
  //   employeeNoError:'',
   
  //   }
  //   }
  //   handleSubmit = () => {
  //   const { password,employeeNo } = this.state
  //   const payload = { password,employeeNo }
    
  //   let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
  //   let reg_employeeNo=/^[A-Z0-9]{4}$/;
  //   let t=0;
    
  //   if(!this.state.password) this.setState({passwordError:'Password is required'});
  //   else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
  //   else {
  //   t++;
  //   this.setState({passwordError:''});
  //   }
  //   if(!this.state.employeeNo) this.setState({employeeNoError:'EmployeeNo is required'});
  //   else if(!reg_employeeNo.test(this.state.employeeNo)) this.setState({employeeNoError:'Invalid EmployeeNo'});
  //   else {
  //   t++;
  //   this.setState({employeeNoError:''});
  //   }
    
  //   if(t>1) {
  //   this.props.loginHandle(payload);
  //   browserHistory.push("/HomePage");
  //   console.log(payload)
  //   } 
  //   }
    
  //   handleChange=(e)=>{
  //   this.setState({[e.target.name]:e.target.value});
  //   }
  //   handleSignin=()=>{
  //     const { employeeNo,password} = this.state;
  //     const payload = {employeeNo ,password }
      
  //   }

  constructor(props) {
    super(props);
    this.state = {
    employeeNo: '',
    password: '',
    uerr: '',
    perr: ''
    };
  
    
    }
    onHandleClicksCancel = (e) => {
    
    BrowserHistory.push('/LoginForm'); 
    
    }
    
    
    onHandleClick = (e) => {
    e.preventDefault();
    const payload = {
      employeeNo: this.state.employeeNo,
    password: this.state.password
    }
    // signup(reqst).then(res => {
    // if (res.data === "User Created Succesfully") {
    // alert("UserCreated Successfully")
    // BrowserHistory.push('/login')
    // }
    
    // })
    
    if (this.state.employeeNo.length === 0 && this.state.password.length === 0 ) {
    this.setState({
    uerr: "Email is required",
    perr: "Password is required"
    
    })
    }
    else if (this.state.employeeNo.length === 0) {
    this.setState({ uerr: "Username is required" })
    }
    else if (this.state.password.length === 0) {
    this.setState({ perr: "Password is required" })
    }
    else if (!this.state.employeeNo.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
    this.setState({ uerr: "Please enter the valid email" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
    this.setState({ perr: "Please enter the valid password" })
    }
    // else {
    //     BrowserHistory.push('/dashboard')
    //     }
    this.props.loginHandle(payload);
        
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
          <input className="emp1"  type="text" name="employeeNo" onChange={this.onHandleChange}  placeholder="EmployeeNo"/><br></br> 
          <p className='red'>{this.state.employeeNoError}</p> 

          <label className="pwd"></label>
          <img className="lockimg" src={logo1}></img>
          <input className="pwd1"  type="password" name="password" onChange={this.onHandleChange}  placeholder="password" /><br></br>
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
        <Footer/>
      </div>
      </div>
    )
    } 
}
const mapStateToProps=(state)=>{
  const {password,EmployeeNo }=state.LoginReducer
  return {password,EmployeeNo }
}
export default connect(mapStateToProps,{loginHandle})  (LoginPage);






















