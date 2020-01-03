import React from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import logo from './Navbar/img.jpg'
import logo1 from './Navbar/imglock.png'
import logo2 from './Navbar/humanimg.png'
import { SocialIcon } from 'react-social-icons';
// import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import BrowserHistory from "./Utils/BrowserHistory";
// import { LoginAction } from '../Action/LoginAction';

class LoginPage extends React.Component {
  
  onHandleClick(){
    BrowserHistory.push("/HomePage");
    }
  render() {
    return (
      <div>
        <div>
          <Navbar/>
        </div>
        <img className="logo1" src={logo}></img>
        <h3 className="login1">Login</h3>
        <form>
          <label className="emp"></label>
          <img className="humanimg" src={logo2}></img>
            <input className="emp1" type="text" name="employeename" placeholder=" EmployeeNo" onChange={this.props.Employee_Id}/><br></br>
                {/* <div>Username is required</div> */}
                    
          <label className="pwd"></label>
          <img className="lockimg" src={logo1}></img>
            <input className="pwd1"  type="password" name="password"  placeholder="password" onChange={this.props.password} /><br></br>
                {/* <div>Password is required</div> */}   
                <button className="login" onClick={this.onHandleClick}>Login</button>
                <p className="header1">forget password?</p>
                <p className="header2">or sign in with</p>
        </form>
        <div className="icons">       
         <SocialIcon className="icons" url="http://twitter.com/jaketrent" />
         <SocialIcon className="icons" url="http://facebook.com/jaketrent" />
         <SocialIcon className="icons" url="http://google.com/jaketrent" />
      </div>
      <div>
        <Footer/>
      </div>
      </div>
    )
    } 
}

function mapStoreToProps(state) {
    const {Employee_Id}=state.LoginReducer;
    const {password}=state.LoginReducer;
    return { Employee_Id,password};
}

export default connect(mapStoreToProps)(LoginPage);

