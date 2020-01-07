import React, { Component } from 'react';
import './LeaveForm.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

class LeaveForm extends Component {
  render() {
    return (
      <div className="leaveform">

      <div>
        <Navbar/>
      </div><br></br>

      <h3 className="leaveapp">Leave Application</h3><br></br>
      {/* <p className="sidebar">Attendance Regularization</p>
      <p  className="sidebar">Leaves</p> */}
      <form>
      <span>Leave Type</span>
      <span><select className="leaves">
       <option></option>
       <option value="Earned Leave">Earned Leave</option>
       <option value="Componsentory Off">Componsentory Off</option>
       <option value="Sick Leave">Sick Leave</option>
       </select></span><br></br><br></br>
       <div className="grid-container">
    
       <label>From Data</label>
       <input type="text" name=" Date" placeholder=" "></input>
      
       <label>To Date </label>
       <input type="number" name=" Date" placeholder=" "></input><br></br>

       {/* {<label>To Session  </label>
       <select>
       <option>Session2</option>
       <option>Session1</option>
       </select>
      <br></br> */} 

       <label>Days</label>
       <input type="number" name=" Days" placeholder="0"></input>

       <label>Balance</label>
       <input type="number" name=" Balance" placeholder="0"></input>
       </div><br></br>

       <div>
       <label>Reason</label>
       <input className="reason" type="text" name=" Reason" placeholder=""></input><br></br>
       </div>

       <label>Contact Details</label>
       <input className="contact" type="text" name=" Contact Details" placeholder=" "></input><br></br>

       <label>CC To</label>
       <input className="holder5" type="text" name=" CC" placeholder=""></input><br></br>

       <p id="note">Note : Seperate multiple emails with commas </p>
       <button className="apply">Apply</button><br></br>
       <button id="cancelbtn">Cancel</button>
     </form>
       <div>
         <Footer/>
       </div>
      
      </div>
    );
  }
}

export default LeaveForm;
