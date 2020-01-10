import React, { Component } from 'react';
import './LeaveDirectory.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

class LeaveDirectory extends Component {

    render() {
        return (
            <div>
              <div>
                <Navbar/>
              </div>
               
              <div className="empdir">
                  <table>
                    <tr>
                      <th>EmpId</th>
                      <th>EmpName</th>
                      <th>LeaveType</th>
                      <th>Reason</th>
                      <th>No. of days</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     <td><button className="approvbtn">Approve</button><button>Reject</button></td>
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