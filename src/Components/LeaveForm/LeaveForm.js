import React, { Component } from 'react';
import './LeaveForm.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

class LeaveForm extends Component {
  render() {
    return (
      <div>

      <div>
        <Navbar/>
      </div><br></br>

      <h3 className="leaveapp">Leave Application</h3>
      <p className="sidebar">Attendance Regularization</p>
      <p className="sidebar">Help Desk</p>
      <p  className="sidebar">Leaves</p>
      <form className="container4">

       <label>Leave Type  </label>
       <select className="leaves">
       <option></option>
       <option value="Earned Leave">Earned Leave</option>
       <option value="Componsentory Off">Componsentory Off</option>
       <option value="Sick Leave">Sick Leave</option>
       </select><br></br>
      
       <div>
       <label>From Date  </label>
       <input className="num" type="text" name=" Date" placeholder=" "></input></div>
         
       <label>From Session  </label>
       <select className="session">
       <option>Session1</option>
       <option>Session2</option>
       </select><br></br>

       <label className="date">To Date : </label>
       <input className="num1" type="number" name=" Date" placeholder=" "></input>

       <label className="session2">To Session  </label>
       <select className="option">
       <option>Session2</option>
       <option>Session1</option>
       </select><br></br>

       <label>Days</label>
       <input type="number" name=" Days" placeholder="0"></input>

       <label>Balance</label>
       <input type="number" name=" Balance" placeholder="0"></input><br></br>

       <label>Reason</label>
       <input type="text" name=" Reason" placeholder=""></input><br></br>

       <label>Contact Details</label>
       <input type="text" name=" Contact Details" placeholder=" "></input><br></br>

       <label>CC To</label>
       <input type="text" name=" CC" placeholder=""></input>

       <p>Note : </p>
       <button>Apply</button>
       <button>Cancel</button>
     </form>
       <div>
         <Footer/>
       </div>
      
      </div>
    );
  }
}

export default LeaveForm;


