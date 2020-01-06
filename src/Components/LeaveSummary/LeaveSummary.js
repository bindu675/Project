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
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 container5">
                  <div id="leavebal">Leave Balance-2020</div><br></br>
                  <div className="leaveatt">
                  <div>WFH</div>
                  <div>0</div>
                  <div>ML</div>
                  <div>0</div>
                  <div>EL</div>
                  <div>1</div>
                  <div>CO</div>
                  <div>0</div>
                  <div>SL</div>
                  <div>0.5</div>
                 </div>
                </div> 

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 container5">
                  <div id="leavebal">Leave Balance-2020</div><br></br>
                  <div className="leaveatt">
                  <div>WFH</div>
                  <div>0</div>
                  <div>ML</div>
                  <div>0</div>
                  <div>EL</div>
                  <div>1</div>
                  <div>CO</div>
                  <div>0</div>
                  <div>SL</div>
                  <div>0.5</div>
                 </div>
                </div> 
                </div>
              <div>
            
                <Footer/>
              </div>
            </div>
        );
    }
}

export default LeaveSummary;