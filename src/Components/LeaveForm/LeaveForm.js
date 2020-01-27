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
      from_Date:'',
      to_Date: '',
      Difference_In_Days: 0,
      balance: 6,
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
    console.log(this.state.from_Date)
  };
  handleChangeto = date => {
    this.setState({
      to_Date: date
    });
    this.calculateDays(date);
  };

  onHandleClick = (e) => {
    debugger
    const payload = {
      employeeName: this.state.employeeName,
      empid: this.state.empid,
      Reason: this.state.reason,
      No_of_days: this.state.Difference_In_Days,
      Email: this.state.Email,
      type: this.state.type,
      balance: this.state.balance

    }
    // if(!this.No_of_days>6)
    // {
    //   alert('no leave balance')
    // }
    console.log(payload)

    const options = {
      url: 'http://localhost:9001/Leave',
      method: 'PUT',
      data: payload
    };
    axios(options)
      .then(response => {
        console.log(response.status);
        BrowserHistory.push('/HomePage')
      });
  }
  calculateDays = (date) => {
    var Difference_In_Time = date.getTime() - this.state.from_Date.getTime();
    var temp=Math.round(Difference_In_Time / (1000 * 3600 * 24))
    this.setState({ Difference_In_Days: temp })
    // if(Difference_In_Days)
    this.balanceCalculate(temp);

  }
  balanceCalculate=(temp)=>{
    if(temp<=6)
        this.setState({balance:this.state.balance-temp})
        else{
          this.setState({balance:"you have no leaves"})
          alert("you have no leaves")
        }
        

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
            <option value="Sick Leave">Sick Leave</option>
          </select></span><br></br><br></br>
          <div className="grid-container">

            <label>From Date</label>
            <DatePicker className="fromdate"
              selected={this.state.from_Date}
              onChange={this.handleChange}
            />

            <label>To Date </label>
            <DatePicker className="todate"
              selected={this.state.to_Date}
              onChange={this.handleChangeto}
            />
            <label>Days</label>
            <input type="number" name="days" placeholder=" " value={this.state.Difference_In_Days} onChange={this.onHandleChange}></input>

            <label>Balance</label>
            <input type="number" value={this.state.balance} name="balance" placeholder=" " onChange={this.onHandleChange}></input>
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
        <div className="footerform">
          <Footer />
        </div>

      </div>
    );
  }
}


export default LeaveForm;
