import React, { Component } from 'react';
import axios from "axios"
import { template } from '@babel/core';

class Leaveviewsummary extends Component {
  state = {
    total_leave: 6,
    balance: ''
  }
  componentDidMount() {
    this.setState({ balance: 3 })
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
    return (
      <div>
        <input type="range" min="0" max="6" value={this.state.balance} class="slider " id="myRange"></input>
      </div>
    );
  }
}

export default Leaveviewsummary;