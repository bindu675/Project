import React, { Component } from 'react';

class Leaveviewsummary extends Component {
    state={
        balance:''
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
        return (
            <div>
                <input type="range" min="0" max="6" value={this.state.balance} class="slider " id="myRange"></input>
            </div>
        );
    }
}

export default Leaveviewsummary;