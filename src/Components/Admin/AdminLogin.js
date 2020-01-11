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
import browserHistory from "../Utils/BrowserHistory";
import {loginHandle} from '../../Action/LoginAction';

class AdminLogin extends React.Component {
  constructor(props){
    super(props);
    this.state={
    password:'',
    employeeNo:'',
    passwordError:'',
    employeeNoError:'',
   
    }
    }
    handleSubmit = () => {
    const { password,employeeNo  } = this.state
    const payload = { password,employeeNo  }
    
    let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
    let reg_employeeNo=/^[A-Za-z0-9]{10}$/;
    let t=0;
    
    if(!this.state.password) this.setState({passwordError:'Password is required'});
    else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
    else {
    t++;
    this.setState({passwordError:''});
    }
    if(!this.state.employeeNo) this.setState({employeeNoError:'EmployeeNo is required'});
    else if(!reg_employeeNo.test(this.state.employeeNo)) this.setState({employeeNoError:'Invalid EmployeeNo'});
    else {
    t++;
    this.setState({employeeNoError:''});
    }
    
    if(t>1) {
    this.props.loginHandle(payload);
    } 
    }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    handleSignin=()=>{
      const { employeeNo,password} = this.state;
      const payload = { employeeNo,password }
      browserHistory.push("/HomePage");
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
          <input className="emp1"  type="text" name="employeeNo" onChange={this.handleChange}  placeholder="EmployeeNo"/><br></br> 
          <p className='red'>{this.state.employeeNoError}</p> 

          <label className="pwd"></label>
          <img className="lockimg" src={logo1}></img>
          <input className="pwd1"  type="password" name="password" onChange={this.handleChange}  placeholder="password" /><br></br>
          <p className='red'>{this.state.passwordError}</p>

          <button className="login" onClick={this.handleSubmit}>Login</button>
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
export default connect(mapStateToProps,{loginHandle})  (AdminLogin);
