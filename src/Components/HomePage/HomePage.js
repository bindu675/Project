import React, { Component } from 'react';
import './HomePage.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo5 from '../Navbar/humanimg.png'
import logo7 from '../Navbar/homeimg1.jpeg'
import axios from "axios"
// import { Button, Nav } from 'react-bootstrap';

class HomePage extends Component {
   state={
    feedtext:'',
   }
   onHandleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    onHandleClick = (e) => {
        const payload = {
          feedtext: this.state.feedtext
        };
      
      const options = {
        url: 'http://localhost:9001/Feed',
        method: 'POST',
        data: payload
      };
      axios(options)
        .then(response => {
          console.log(response.status);
          // sessionStorage.setItem('authentication', response.data.token)
          // sessionStorage.setItem('userEmail', response.data.email)
          // BrowserHistory.push('/Admin')
        });
      }
    render() {
        return (
         <div>
          <div>
            <Navbar/>
          </div><br></br>

          <div className="container3">
            <label className="feed">Feeds</label><br></br>
            <input className="holder" type="text" name="feedtext" placeholder="" onChange={this.onHandleChange}></input><br></br>
            <button className="button" onClick={this.onHandleClick}>Update</button>
          </div>
         
          <input className="user" type="text" placeholder=" "></input>
          <img className="humanimg1" src={logo5}></img>
          <div class="vertical-menu">
          <a className="feed1" href="#">Feeds</a>
          <a className="feed1" href="LeaveSummary">Leave</a>
          <a className="feed1" href="LeaveForm">Apply to Leave</a>
          </div>
         
          <div class='eventcontainer'>
            <div class="row"> 
            <div class="col" id="events3">
              To Events
            </div>
            <div class="col" id="day1" >
              a day go
            </div>
            </div>
            {/* <div class="event1">To Events</div>
            <div class="day1">a day go</div> */}
            <div className="paragraph">Happy birthdy Arun Kumar M R,Have a great year ahead</div>
            <img className="homeimg1" src={logo7}></img>
          </div>
          <Footer/>
        </div>
        
        );
    }
}

export default HomePage;