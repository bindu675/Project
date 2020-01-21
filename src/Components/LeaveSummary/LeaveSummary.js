// import React, { Component } from 'react';
// import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar';
// import './LeaveSummary.css';

// class LeaveSummary extends Component {
//   render() {
//     return (
//       <div>

//         <div>
//           <Navbar />
//         </div><br></br>
//         <div className="row">
//           <div className="container5">
//             <div id="leavebal">Leave Balance-2020</div><br></br>
//             <div className="leaveatt">

//               <div id="contents">SL</div>
//               <div id="contents">1</div>
//               <button class="leavebal">View Leave summary</button>
//             </div>
//           </div>

//           <div className="container7">
//             <button id="leavebal6">Leave Summary-2020</button><br></br>
//             <div className="leaveatt6">
//               <div id="contents1">SL</div>
//               <div id="contents1">19 Dec 2020 am not feeling well</div>
//               <div id="contents1">SL</div>
//               <div id="contents1">20 Dec 2020 Have personal work</div>
//               <div id="contents1">SL</div>
//               <div id="contents1">27 Dec 2020 am not feeling well</div>
//             </div>
//           </div>
//           {/* <button className="apprbtn">Approve</button><button>Reject</button> */}
//         </div>
//         <div id="footer2">
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

// export default LeaveSummary;





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
  // approve = (id) => {
  //   let addedItem = this.state.list.find(item => item._id === id)
  //   addedItem.Status = "approve"
  //   const options = {
  //     url: ` http://localhost:9001/Leave/${id}`,
  //     method: 'PUT',
  //     data: addedItem
  //   };
  //   window.location.reload()
  //   axios(options)

  // }
  // Reject = (id) => {
  //   let addedItem = this.state.list.find(item => item._id === id)
  //   addedItem.Status = "reject"
  //   const options = {
  //     url: ` http://localhost:9001/Leave/${id}`,
  //     method: 'PUT',
  //     data: addedItem
  //   };
  //   window.location.reload()
  //   axios(options)

  // }

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
             {/* {item._id}  */}
            {/* <td className="tab10">{item.empid}</td> */}
            {/* <td className="tab11">{item.employeeName}</td> */}
            <td className="tab11">{item.type}</td>
            <td className="tab12">{item.Reason}</td>
            <td className="tab13">{item.No_of_days}</td>
            <td className="tab14">{item.Status}</td>
            {/* <td className="tab15"><button className="approvbtn" onLoad={this.approve} onClick={this.approve.bind(this, item._id)}>Approve</button><button onLoad={this.Reject} onClick={this.Reject.bind(this, item._id)}>Reject</button></td> */}
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
          <table className="clsitems1">
            <tr>
              {/* <th></th> */}
              {/* <th>EmpId</th>
              <th>EmpName</th> */}
              <th>type</th>
              <th>Reason</th>
              <th>No_of_days</th>
              <th>Status</th>
            </tr>
          </table>
          <table className="tab16">
            <tr>
              {itemList}
            </tr>
          </table>

          <div className="footer2">
            <Footer/>
          </div>
        </div>
      </div>

    );
  }
}

export default LeaveSummary;