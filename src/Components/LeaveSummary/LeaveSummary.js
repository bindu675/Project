import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import './LeaveSummary.css';

class LeaveSummary extends Component {
    render() {
        return (
            <div>

               <div>
                 <Navbar/>
                 </div><br></br>
              <div className="row">
                <div className="container5">
                  <div id="leavebal">Leave Balance-2020</div><br></br>
                  <div className="leaveatt">

                  <div id="contents">SL</div>
                  <div id="contents">1</div>
                  <div class="leavebal">View Leave summary</div>
                 </div>
                </div> 

                
                {/* <div id="leavebal1">Upcoming Holidays</div><br></br>
                  <div className="leaveatt1">
                  <div className="para6">Wednesday  15-01-2020</div>
                  <div className="para7">Sankranthi</div>
                 </div>
                </div> */}

                <div className="container7">
                  <div id="leavebal6">Leave Summary-2020</div><br></br>
                  <div className="leaveatt6">
                  <div id="contents1">SL</div>
                  <div id="contents1">19 Dec 2020 am not feeling well<button className="apprbtn">Approve</button><button>Reject</button></div>
                  <div id="contents1">SL</div>
                  <div id="contents1">20 Dec 2020 Have personal work</div>
                  <div id="contents1">SL</div>
                  <div id="contents1">27 Dec 2020 am not feeling well</div>
                 </div>
                </div> 

              </div>
              <div id="footer2">
                <Footer/>
              </div>
            </div>
        );
    }
}

export default LeaveSummary;