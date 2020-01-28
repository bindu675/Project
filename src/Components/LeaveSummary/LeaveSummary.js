import React, { Component } from 'react';
import './LeaveSummary.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import BrowserHistory from "../Utils/BrowserHistory";
import axios from "axios"

class LeaveSummary extends Component {
  state = {
    list: []
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
      });
  }
  render() {
    let itemList = this.state.list.map(item => {
      return (
        <div className="tableitems12">
          <tr>
            <td className="tab11">{item.type}</td>
            <td className="tab12">{item.Reason}</td>
            <td className="tab14">{item.Status}</td>
          </tr>
        </div>
      )
    })
    let itemList1 = this.state.list.map(item => {
      return (
        <div className="tableitem2">
          <tr>
            <td className="table2">{item.type}</td>
            <td className="tab1e3">{item.balance}</td>

          </tr>
        </div>
      )
    })






    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
        <p className="leave_transaction">Leave Transaction</p>
        <p className="leavebaltab">Leave Balance-2020</p>
          <table className="clsitems2">
            <tr>
              <th>type</th>
              <th>Balance</th>
            </tr>

          </table>
          <table className="table6">
            <tr>
              {itemList1}
            </tr>
          </table>
          <button className="summarybtn">View summary</button>
          <table className="clsitems1">
            <tr>
              <th>type</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </table>
          <table className="tab16">
            <tr>
              {itemList}
            </tr>
          </table>

          <div className="footersummary">
            <Footer />
          </div>
        </div>
      </div>

    );
  }
}

export default LeaveSummary;