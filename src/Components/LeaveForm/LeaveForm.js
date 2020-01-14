import React, { Component } from 'react';
import './LeaveForm.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
import axios from "axios"

class LeaveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    type:'',
    from_Date:'',
    to_Date:'',
    days:'',
    balance:'',
    reason:'',
    contact_Details:'',
    cc:'',
    };
  
    }


  onHandleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }

    onHandleClick = (e) => {
    //   e.preventDefault();
      const payload = {
        employeeName: this.state.employeeName,
        empid: this.state.empid,
        Reason:this.state.reason,
        No_of_days:this.state.days,
        type:this.state.type
      }
      console.log(payload)

    const options = {
      url: 'http://localhost:9001/Leave',
      method: 'POST',
      data: payload
      };
      axios(options)
      .then(response => {
      console.log(response.status);
      // sessionStorage.setItem('authentication', response.data.token)
		  // sessionStorage.setItem('userEmail', response.data.email)
      BrowserHistory.push('/HomePage')
    });
  }


  render() {
    return (
      <div className="leaveform">

      <div>
        <Navbar/>
      </div><br></br>

      <h3 className="leaveapp">Leave Application</h3><br></br>
      
      <form>
      <span>Leave_Type</span>
      <span><select className="leaves" name="type" onChange={this.onHandleChange}>
       <option></option>
       {/* <option value="Earned Leave">Earned Leave</option>
       <option value="Componsentory Off">Componsentory Off</option> */}
       <option value="Sick Leave">Sick Leave</option>
       </select></span><br></br><br></br>
       <div className="grid-container">
    
       <label>From Data</label>
       <input type="text" name="from_Date" placeholder=" " onChange={this.onHandleChange} ></input>
      
       <label>To Date </label>
       <input type="text" name="to_Date" placeholder=" " onChange={this.onHandleChange}></input><br></br>

       <label>Days</label>
       <input type="number" name="days" placeholder=" " onChange={this.onHandleChange}></input>

       <label>Balance</label>
       <input type="number" name="balance" placeholder=" " onChange={this.onHandleChange}></input>
       </div><br></br>

       <div>
       <label>Reason</label>
       <input className="reason" type="text" name="reason" placeholder="" onChange={this.onHandleChange}></input><br></br>
       </div>

       <label>Contact Details</label>
       <input className="contact" type="text" name="contact_Details" placeholder=" " onChange={this.onHandleChange}></input><br></br>

       <label>CC To</label>
       <input className="holder5" type="text" name="cc" placeholder="" onChange={this.onHandleChange}></input><br></br>

       <p id="note">Note : Seperate multiple emails with commas </p>
       <button className="apply" onClick={this.onHandleClick}>Apply</button><br></br>
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
