import React, { Component } from 'react';
import './LeaveDirectory.css';
import Navbar2 from '../Admin/Navbar2';
import Footer from '../Footer/Footer';
// import BrowserHistory from "../Utils/BrowserHistory";
import axios from "axios"

class LeaveDirectory extends Component {
  state = {
    list: []
  }
  approve = (id) => {
    let addedItem = this.state.list.find(item => item._id === id)
    addedItem.Action = "approve"
    const options = {
      url: ` http://localhost:9001/Leave/${id}`,
      method: 'PUT',
      data: addedItem
    };
    window.location.reload()
    axios(options)

  }
  Reject = (id) => {
    let addedItem = this.state.list.find(item => item._id === id)
    addedItem.Action = "reject"
    const options = {
      url: ` http://localhost:9001/Leave/${id}`,
      method: 'PUT',
      data: addedItem
    };
    window.location.reload()
    axios(options)

  }

  componentDidMount() {

    const options = {
      url: 'http://localhost:9001/Leave',
      method: 'GET'
    };
    axios(options)
      .then(response => {
        console.log(response.data);
        this.setState({ list: response.data })
        // sessionStorage.setItem('authentication', response.data.token)
        // sessionStorage.setItem('userEmail', response.data.email)
        
      });
  }
  render() {
    let itemList = this.state.list.map(item => {
      return (
        <div className="card1" key={item._id}>

          <tr>
            <td className="tabsi">{item.SIno}</td>
            <td className="tab4">{item.empid}</td>
            <td className="tab5">{item.employeeName}</td>
            <td className="tab6">{item.Reason}</td>
            <td className="tab7">{item.No_of_days}</td>
            <td className="tab8">{item.Action}</td>
            <td className="tab9"><button className="approvbtn" onLoad={this.approve} onClick={this.approve.bind(this, item._id)}>Approve</button><button onLoad={this.Reject} onClick={this.Reject.bind(this, item._id)}>Reject</button></td>
          </tr>

        </div>
      )
    })
    return (
      <div>
        <div>
          <Navbar2/>
        </div><br/>
        <div claitemListsName="empdir">
          <table>
            <tr>
              <th>SIno.</th>
              <th>EmpId</th>
              <th>EmpName</th>
              <th>Reason</th>
              <th>No_of_days</th>
              <th>Leave_status</th>
              <th>Action</th>
            </tr>
          </table>
          <table className="tab10">
            <tr>
              {itemList}
            </tr>
          </table>

          <div className="footer4">
            <Footer />
          </div>
        </div>
      </div>

    );
  }
}

export default LeaveDirectory;