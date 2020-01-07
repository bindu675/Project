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
                  <div id="contents">WFH</div>
                  <div id="contents">0</div>
                  <div id="contents4">ML</div>
                  <div id="contents4">0</div>
                  <div id="contents">EL</div>
                  <div id="contents">1</div>
                  <div id="contents4">CO</div>
                  <div id="contents4">0</div>
                  <div id="contents">SL</div>
                  <div id="contents">0.5</div>
                  <div class="leavebal">View Leave summary</div>
                 </div>
                </div> 

                <div className="container6">
                <div id="leavebal1">Upcoming Holidays</div><br></br>
                  <div className="leaveatt1">
                  <div className="para6">Wednesday  15-01-2020</div>
                  <div className="para7">Sankranthi</div>
                 </div>
                </div>

                <div className="container7">
                  <div id="leavebal6">Leave Balance-2020</div><br></br>
                  <div className="leaveatt6">
                  <div id="contents1">EL</div>
                  <div id="contents1">19 Dec 2019 am not feeling well</div>
                  <div id="contents1">EL</div>
                  <div id="contents1">20 Dec 2019 Have personal work</div>
                  <div id="contents1">EL</div>
                  <div id="contents1">27 Dec 2019 am not feeling well</div>
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