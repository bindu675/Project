import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      item: []
    }

  }
  delete = (id) => {
    axios.delete(`http://localhost:9001/Desktop/${this.props.obj._id}`)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  render() {
    return (
      <tr>
        <td className="tab2">
          {this.props.obj.SIno}
        </td>

        <td className="tab3">
          {this.props.obj.EmpId}
        </td>

        <td className="tab4">
          {this.props.obj.FirstName}
        </td>

        <td className="tab5">
          {this.props.obj.LastName}
        </td>

        <td className="tab6">
          {this.props.obj.Date_of_Birth}
        </td>

        <td className="tab7">
          {this.props.obj.Sex}
        </td>

        <td className="tab8">
          {this.props.obj.JoiningDate}
        </td>

        <td className="tab9">
          {this.props.obj.email_id}
        </td>

        <td className="tab10">
          {this.props.obj.MobileNo}
        </td>

        <td className="tab11">
          <button className="btn btn-danger" onClick={this.delete.bind(this.id)}>Delete</button>
        </td>

      </tr>
    );
  }
}
export default TableRow;




