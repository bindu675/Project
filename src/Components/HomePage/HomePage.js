import React, { Component } from 'react';
import './HomePage.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo5 from '../Navbar/humanimg.png'
import logo7 from '../Navbar/homeimg1.jpeg'
// import { Button, Nav } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
         <div>
          <div>
            <Navbar/>
          </div><br></br>
         
          <input className="user" type="text" placeholder=" "></input>
          <img className="humanimg1" src={logo5}></img>
          <div class="vertical-menu">
          <a className="feed1" href="#">Feeds</a>
          <a className="feed1" href="#">Leave</a>
          <a className="feed1" href="#">Apply to Leave</a>
          </div>
          {/* <div>
          <form class="container1">
              <label>Feeds</label><br></br>
              <input type="text" placeholder=" "></input>
              <button>Update</button><br></br>
          </form>
          </div> */}
          <div class='container'>
            <div class="event1">To Events</div>
            <div class="day1">a day go</div>
            <div className="paragraph">Happy birthdy Arun Kumar M R,Have a great year ahead</div>
            <img className="homeimg1" src={logo7}></img>
          </div>
          <Footer/>
        </div>
        
        );
    }
}

export default HomePage;