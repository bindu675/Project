import React, { Component } from 'react';
import BrowserHistory from "../Utils/BrowserHistory";
import axios from 'axios';
import './EmployeeList.css';
import TableRow from './TableRow';
import Navbar2 from '../Admin/Navbar2';
import Footer from '../Footer/Footer';


class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:9001/Desktop')
      .then(response => {
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
        BrowserHistory.push('/EmployeeTable')
      })
  }
  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (

      <div>
        <Navbar2/>
        <p>Employee List</p>
        <a href="EmployeeTable" className="emplist_add">AddEmployee</a>
        <table className="table" style={{ marginTop: 50 }}>
          <tr>
            <th>SIno</th>
            <th>EmpId</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Date_of_Birth</th>
            <th>Sex</th>
            <th>JoiningDate</th>
            <th>email_id</th>
            <th>MobileNo</th>
            <th colSpan="2">Action</th>
          </tr>
          {this.tabRow()}
        </table>
        <div className="emplst_footer">
      <Footer/>
      </div>
      </div>
    );
  }
}

export default EmployeeList;
