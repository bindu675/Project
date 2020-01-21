import React, { Component } from 'react';
import './LeaveDirectory.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import BrowserHistory from "../Utils/BrowserHistory";
import axios from "axios"

class LeaveDirectory extends Component {
  state = {
    list: []
  }
  approve = (id) => {
    let addedItem = this.state.list.find(item => item._id === id)
    addedItem.Status = "approve"
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
    addedItem.Status = "reject"
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
        // BrowserHistory.push('/HomePage')
      });
  }
  render() {
    let itemList = this.state.list.map(item => {
      return (
        <div className="card1" key={item._id}>

          <tr>{item._id}
            <td className="tab4">{item.empid}</td>
            <td className="tab5">{item.employeeName}</td>
            <td className="tab6">{item.Reason}</td>
            <td className="tab7">{item.No_of_days}</td>
            <td className="tab8">{item.Status}</td>
            <td className="tab9"><button className="approvbtn" onLoad={this.approve} onClick={this.approve.bind(this, item._id)}>Approve</button><button onLoad={this.Reject} onClick={this.Reject.bind(this, item._id)}>Reject</button></td>
          </tr>

        </div>
      )
    })
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div claitemListsName="empdir">
          <table>
            <tr>
              <th></th>
              <th>EmpId</th>
              <th>EmpName</th>
              <th>Reason</th>
              <th>No_of_days</th>
              <th>Status</th>
            </tr>
          </table>
          <table className="tab10">
            <tr>
              {itemList}
            </tr>
          </table>

          <div className="footer4">
            <Footer/>
          </div>
        </div>
      </div>

    );
  }
}

export default LeaveDirectory;