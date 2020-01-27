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
        // sessionStorage.setItem('authentication', response.data.token)
        // sessionStorage.setItem('userEmail', response.data.email)
        // BrowserHistory.push('/HomePage')
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
        <div className="tableitems121">
          <tr>
            <td className="tab121">{item.type}</td>
             <td className="tab122">{item.balance}</td>
            
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
          <table className="clsitems2">
            <tr>
              <th>type</th>
              <th>Balance</th>
            </tr>
           
          </table>
          <table className="tab106">
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