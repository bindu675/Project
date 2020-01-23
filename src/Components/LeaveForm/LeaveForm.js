import React, { Component } from 'react';
import './LeaveForm.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"


class LeaveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      from_Date: new Date(),
      to_Date: new Date(),
      Difference_In_Days: "",
      // startDate: new Date(),
      // endDate: new Date(),
      // Difference_In_Days:"",
      balance: '',
      reason: '',
      contact_Details: '',
      Email: '',
    };

  }


  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange = date => {
    this.setState({
      from_Date: date
    });
  };
  handleChangeto = date => {
    this.setState({
      to_Date: date
    });
    var Difference_In_Time = this.state.to_Date.getTime() - this.state.from_Date.getTime();
    console.log(this.state.from_Date.getTime())
    this.setState({
      Difference_In_Days: Difference_In_Time / (1000 * 3600 * 24)
    });
  };

  // balance = (e) => {
  //   debugger
  //   this.setState({ to_Date: e.target.value });

  //   this.setState({ balance: this.state.to_Date - this.state.from_Date });
  //   console.log(this.state.balance)
  // }

  onHandleClick = (e) => {
    //e.preventDefault();
    debugger
    const payload = {
      employeeName: this.state.employeeName,
      empid: this.state.empid,
      Reason: this.state.reason,
      No_of_days: this.state.days,
      Email: this.state.Email,
      type: this.state.type


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
          <Navbar />
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
            {/* <input type="DatePicker" name="from_Date" placeholder=" " onChange={this.onHandleChange} ></input> */}
            <DatePicker
              selected={this.state.from_Date}
              onChange={this.handleChange}
            />

            <label>To Date </label>
            {/* <input type="DatePicker" name="to_Date" placeholder=" " onChange={this.balance}></input><br></br> */}
            <DatePicker
              selected={this.state.to_Date}
              onChange={this.handleChangeto}
            />

            <label>Days</label>
            <input type="number" name="days" placeholder=" " onChange={this.onHandleChange}></input>
            <p>{this.state.Difference_In_Days}</p>

            <label>Balance</label>
            <input type="number" name="balance" placeholder=" " defaultvalue={this.state.balance}></input>
          </div><br></br>

          <div>
            <label>Reason</label>
            <input className="reason" type="text" name="reason" placeholder="" onChange={this.onHandleChange}></input><br></br>
          </div>

          <label>Contact Details</label>
          <input className="contact" type="text" name="contact_Details" placeholder=" " onChange={this.onHandleChange}></input><br></br>

          <label>Email</label>
          <input className="holder5" type="text" name="Email" placeholder="" onChange={this.onHandleChange}></input><br></br>

          {/* <p id="note">Note : Seperate multiple emails with commas </p> */}
          <button className="apply" onClick={this.onHandleClick}>Apply</button><br></br>
          <button id="cancelbtn">Cancel</button>
        </form>
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}


export default LeaveForm;
