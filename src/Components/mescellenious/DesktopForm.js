import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
// import './DesktopForm.css';


export default class DesktopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    Users: [] 
};
  }
  componentDidMount() {
    debugger;
    axios.get('http://localhost:9001/Desktop')
      .then(response => {
        debugger
        this.setState({Users: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRow obj={object} key={i}/>;
    });
  }

  render() {
    return (
      <div className="desktoptable">
        <p className="desk">Employee List</p>
        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              <th>SINO.</th>
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
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}


