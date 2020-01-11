import React, { Component } from 'react';
import './Admin.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo5 from '../Navbar/humanimg.png'
import logo7 from '../Navbar/homeimg1.jpeg'

class Admin extends Component {
    render() {
        return (
            <div>
                <div>
                 <Navbar/>
                </div><br></br>

          <div className="container2">
            <label className="feed">Feeds</label><br></br>
            <input className="holder" type="text" placeholder="  "></input><br></br>
            <button className="button">Update</button>
          </div>
         
          <input className="user" type="text" placeholder=" "></input>
          <img className="humanimg1" src={logo5}></img>
          <div class="vertical-menu">
          <a className="feed1" href="#">Feeds</a>
          <a className="feed1" href="LeaveDirectory">Employee_Leave_Details</a>
          <a className="feed1" href="EmployeeDirectory">EmployeeDirectory</a>
          </div>
          

          <div class='admincontainer'>
            <div class="row"> 
            <div class="col event2">
              To Events
            </div>
            <div class="col" id="day2" >
              a day go
            </div>
            </div>
          {/* <div class='admincontainer'>
            <div class="event1">To Events</div>
            <div class="day1">a day go</div> */}
            <div className="paragraph12">Happy birthdy Arun Kumar M R,Have a great year ahead</div>
            <img className="homeimg12" src={logo7}></img>
          </div>
          <div>
          <Footer/>
          </div>
          
        </div>
          
        );
    }
}

export default Admin;