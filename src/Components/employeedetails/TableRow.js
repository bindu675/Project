import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    }
    delete() {
    debugger;
    axios.delete(`http://localhost:9001/delete/${this.props.obj._id}`)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
    window.location.reload();
    }
    // edit() {
    // debugger;
    // axios.edit(`http://localhost:9001/edit/${this.props.obj._id}`)
    // .then(console.log('edit'))
    // .catch(err => console.log(err))
    // window.location.reload();
    // }
    
  render() {
    return (
      <div>
       <tr>

        <td>
          {this.props.obj.SIno}
        </td>

        <td>
          {this.props.obj.EmpId}
        </td>

        <td>
          {this.props.obj.FirstName}
        </td>

        <td>
          {this.props.obj.LastName}
        </td>

        <td>
          {this.props.obj.Date_of_Birth}
        </td>

        <td>
          {this.props.obj.Sex}
        </td>

        <td>
          {this.props.obj.JoiningDate}
        </td>

        <td>
          {this.props.obj.email_id}
        </td>

        <td>
          {this.props.obj.MobileNo}
        </td>

        {/* <td>
          <button onClick={this.edit} className="btn btn-primary">Edit</button>
        </td> */}

        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>

      </tr>
     </div>
    );
  }
}

export default TableRow;













// render() {
// return (
// <tr>

// <td>
// {this.props.obj.SINO}
// </td>

// <td>
// {this.props.obj.EmpId}
// </td>

// <td>
// {this.props.obj.FirstName}
// </td>

// <td>
// {this.props.obj.LastName}
// </td>

// <td>
// {this.props.obj.Date_of_Birth}
// </td>

// <td>
// {this.props.obj.Sex}
// </td>

// <td>
// {this.props.obj.JoiningDate}
// </td>

// <td>
// {this.props.obj.email_id}
// </td>

// <td>
// {this.props.obj.MobileNo}
// </td>

// <td>
// <button onClick={this.edit} className="btn btn-primary">Edit</button>
// </td>

// <td>
// <button onClick={this.delete} className="btn btn-danger">Delete</button>
// </td>

// </tr>
// );
// }
// }

// export default TableRow;