import React, { Component } from 'react';
import './EmployeeDirectory.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BrowserHistory from "../Utils/BrowserHistory";

class EmployeeDirectory extends Component {

  onHandleClick(){
    BrowserHistory.push("/AllPost");
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar/>
                </div><br></br>
                  <div className="empdir">
                  <table>
                    <tr>
                      <th>SINO.</th>
                      <th>EmpId</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Date_of_Birth</th>
                      <th>Sex</th>
                      <th>JoiningDate</th>
                      <th>email id</th>
                      <th>MobileNo.</th>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>QW01</td>
                      <td>Vandana</td>
                      <td>Gowda</td>
                      <td>04-11-1996</td>
                      <td>Female</td>
                      <td>15-02-2020</td>
                      <td>vandana10@gmail.com</td>
                      <td>7535213425</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>QW02</td>
                      <td>Bindu</td>
                      <td>Shree</td>
                      <td>10-07-1996</td>
                      <td>Female</td>
                      <td>03-02-2020</td>
                      <td>bindugowda@gmail.com</td>
                      <td>9423624783</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>QW03</td>
                      <td>Yashaswini</td>
                      <td>Gowda</td>
                      <td>17-07-1997</td>
                      <td>Female</td>
                      <td>12-03-2020</td>
                      <td>yashu10@gmail.com</td>
                      <td>6143624783</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>QW04</td>
                      <td>vasavi</td>
                      <td>K.B</td>
                      <td>16-11-1997</td>
                      <td>Female</td>
                      <td>31-02-2020</td>
                      <td>vasavi35@gmail.com</td>
                      <td>8542632634</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>QW05</td>
                      <td>mithun</td>
                      <td>H.R</td>
                      <td>16-02-1995</td>
                      <td>Male</td>
                      <td>15-06-2019</td>
                      <td>mithun37@gmail.com</td>
                      <td>6423238942</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>QW06</td>
                      <td>Divya</td>
                      <td>Shree</td>
                      <td>11-07-1994</td>
                      <td>Female</td>
                      <td>23-02-2020</td>
                      <td>divya56@gmail.com</td>
                      <td>9563464726</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>QW07</td>
                      <td>Kavya</td>
                      <td>H.C</td>
                      <td>27-03-1996</td>
                      <td>Female</td>
                      <td>10-04-2020</td>
                      <td>kavya24@gmail.com</td>
                      <td>9563464726</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>QW08</td>
                      <td>Harshitha</td>
                      <td>Gowda</td>
                      <td>29-04-1998</td>
                      <td>Female</td>
                      <td>10-04-2020</td>
                      <td>harshi20@gmail.com</td>
                      <td>9563464726</td>
                    </tr>
                  </table>
                  </div>
                  
                <div className="footer3">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default EmployeeDirectory;