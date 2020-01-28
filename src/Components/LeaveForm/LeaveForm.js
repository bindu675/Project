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
      from_Date: '',
      to_Date: '',
      Difference_In_Days: 0,
      balance: 6,
      reason: '',
      contact_Details: '',
      Email: '',
      typeError: '',
      form_dateError: '',
      to_dateError: '',
    };

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
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  onHandleClick = (e) => {
    debugger;
   var a=0 ;
    e.preventDefault();
    const payload = {
      employeeName: this.state.employeeName,
      empid: this.state.empid,
      Reason: this.state.reason,
      No_of_days: this.state.Difference_In_Days,
      Email: this.state.Email,
      type: this.state.type,
      form_date:this.state.form_date,
      balance: this.state.balance

    }
    if (this.state.type === 0 && this.state.form_Date === 0 && this.state.to_Date === 0) {
      a=a+1;
      this.setState({
        typeError: "Firstname is required",
        form_dateError: "Lastname is required",
        to_dateError: "Email is required"
      })
    }
 
    if (this.state.type.length === 0) {
      a=a+1;
      this.setState({ typeError: "enter leave type" })
    }
    else if (this.state.form_Date.length === 0) {
     a++;
      this.setState({ form_dateError: "enter formdate" })
    }
    else if (this.state.to_Date === 0) {
     a++;
      this.setState({ to_dateError: "enter to date" })
    }
 if(a>3){


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
  }
  calculateDays = (date) => {
    var Difference_In_Time = date.getTime() - this.state.from_Date.getTime();
    var temp = Math.round(Difference_In_Time / (1000 * 3600 * 24))
    this.setState({ Difference_In_Days: temp })
    // if(Difference_In_Days)
    this.balanceCalculate(temp);

  }
  balanceCalculate = (temp) => {
    if (temp <= 6)
      this.setState({ balance: this.state.balance - temp })
    else {
      this.setState({ balance: "you have no leaves" })
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
        <form
  ><center><div className="container_leave_dasboard">
           <div> <label>Leave_Type</label></div>
           <div>  <select className="leaves" name="type" onChange={this.onHandleChange}>
           
            <option></option>
            <option value="Sick Leave">Sick Leave</option>
          </select></div>
         
            {/* <p className='red'>{this.state.typeError}</p></div> */}
       
         

           
          
          
          <div><label>Reason</label></div>
          <div><input className="reason" type="text" name="reason" placeholder="" onChange={this.onHandleChange}></input></div>
         
         
           

        
          <div> <label>Contact Details</label></div>
          <div><input className="contact" type="text" name="contact_Details" placeholder=" " onChange={this.onHandleChange}></input></div>
        
          <div><label>Email</label>  </div>
          <div><input className="holder5" type="text" name="Email" placeholder="" onChange={this.onHandleChange}></input>
          </div> 
          <div><label>From Date</label></div>
            <div><DatePicker className="fromdate"
              selected={this.state.from_Date}
              onChange={this.handleChange} 
            /> </div>
            <div> <label>To Date </label></div>
            <div><DatePicker className="todate"
            selected={this.state.to_Date}
            onChange={this.handleChangeto}
          /></div> </div><br/>
          <div className="days_bal">
          <div>  <label>Days</label>
         <input type="number" name="days" placeholder=" " value={this.state.Difference_In_Days} onChange={this.onHandleChange}></input> 
          <label>Balance</label> 
           <input type="number" value={this.state.balance} name="balance" placeholder=" " onChange={this.onHandleChange}></input></div>
         
          
          <div><button className="apply" onClick={this.onHandleClick}>Apply</button>
           <button id="cancelbtn">Cancel</button></div></div>
          </center></form>
        <div className="footerform">
          <Footer/>
        </div>

      </div>
    );
  }
}
export default LeaveForm;