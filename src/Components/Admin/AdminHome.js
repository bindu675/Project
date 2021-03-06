import React, { Component } from 'react';
import './Admin.css'
import Navbar2 from '../Admin/Navbar2';
import Footer from '../Footer/Footer';
import logo5 from '../Navbar/humanimg.png';
import logo7 from '../Navbar/homeimg1.jpeg';
import axios from "axios"

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersview: []
    };
  }
  state = {
    feedtext: '',
  }
  componentDidMount() {
    axios.get('http://localhost:9001/Feed')
      .then(response => {
        this.setState({ usersview: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        window.location.reload()
      });
  }
  render() {
    return (
      <div>
        <div>
          <Navbar2/>
        </div><br></br>

        <div className="container2">
          <label className="feed">Feeds</label><br></br>
          <input className="holder" type="text" name="feedtext" placeholder=" " onChange={this.onHandleChange}></input><br></br>
          <button className="button" onClick={this.onHandleClick}>Update</button>
          <div className="feedstext12">
            {this.state.usersview.map(name => {
              return (
                <table style={{ color: "black" }}>
                  <tr>
                    <td>{name.feedtext}</td>
                  </tr>
                </table>

              )
            }
            )}
          </div>
        </div>

        <input className="user" type="text" placeholder=" "></input>
        <img className="humanimg1" src={logo5}></img>
        <div class="vertical-menu">
          <a className="feed1" href="#">Feeds</a>
          <a className="feed1" href="LeaveDirectory">Employee Leave Details</a>
          <a className="feed1" href="EmployeeList">Employee Directory</a>
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
          <div className="paragraph12">Happy birthdy Arun Kumar M R,Have a great year ahead</div>
          <img className="homeimg12" src={logo7}></img>
        </div>
        <div>
          <Footer />
        </div>

      </div>

    );
  }
}

export default AdminHome;