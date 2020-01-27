import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
import { questionHandle } from '../../Action/DesktopAction';
import './EmployeeTable.css';
import { connect } from 'react-redux'

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SIno: '',
      EmpId: '',
      FirstName: '',
      LastName: '',
      Date_of_Birth: '',
      Sex: '',
      JoiningDate: '',
      email_id: '',
      MobileNo: ''

    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeSIno = (e) => {
    this.setState({
      SIno: e.target.value
    })
  }

  onChangeEmpId = (e) => {
    this.setState({
      EmpId: e.target.value
    })
  }
  onChangeFirstName = (e) => {
    this.setState({
      FirstName: e.target.value
    })
  }
  onChangeLastName = (e) => {
    this.setState({
      LastName: e.target.value
    })
  }
  onChangeDate_of_Birth = (e) => {
    this.setState({
      Date_of_Birth: e.target.value
    })
  }
  onChangeSex = (e) => {
    this.setState({
      Sex: e.target.value
    })
  }
  onChangeJoiningDate = (e) => {
    this.setState({
      JoiningDate: e.target.value
    })
  }
  onChangeemail_id = (e) => {
    this.setState({
      email_id: e.target.value
    })
  }
  onChangeMobileNo = (e) => {
    this.setState({
      MobileNo: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      SIno: this.state.SIno,
      EmpId: this.state.EmpId,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Date_of_Birth: this.state.Date_of_Birth,
      Sex: this.state.Sex,
      JoiningDate: this.state.JoiningDate,
      email_id: this.state.email_id,
      MobileNo: this.state.MobileNo
    };

    this.props.questionHandle(payload);
    BrowserHistory.push('./EmployeeList');
  }
  render() {
    return (
      <div>

        <div>
          <Navbar />
        </div>

        <div>
          <form onSubmit={this.onSubmit} className="empsubmit2">

            <div>
              <label className="empnum1">SIno </label>
              <input type="number"
                className="empnum2"
                value={this.state.SIno}
                onChange={this.onChangeSIno}
              />
            </div>

            <div>
              <label className="empnum3"> EmpId</label>
              <input type="text"
                className="empnum4"
                value={this.state.EmpId}
                onChange={this.onChangeEmpId}
              />
            </div>

            <div>
              <label className="empnum5"> FirstName</label>
              <input type="text"
                className="empnum6"
                value={this.state.FirstName}
                onChange={this.onChangeFirstName}
              />
            </div>

            <div>
              <label className="empnum7"> LastName</label>
              <input type="text"
                className="empnum8"
                value={this.state.LastName}
                onChange={this.onChangeLastName}
              />
            </div>

            <div>
              <label className="empnum9"> Date_of_Birth</label>
              <input type="text"
                className="empnum17"
                value={this.state.Date_of_Birth}
                onChange={this.onChangeDate_of_Birth}
              />
            </div>

            <div>
              <label className="empnum10"> Sex</label>
              <input type="text"
                className="empnum11"
                value={this.state.Sex}
                onChange={this.onChangeSex}
              />
            </div>

            <div>
              <label className="empnum12"> JoiningDate</label>
              <input type="text"
                className="empnum13"
                value={this.state.JoiningDate}
                onChange={this.onChangeJoiningDate}
              />
            </div>

            <div>
              <label className="empnum14"> email_id</label>
              <input type="text"
                className="empnum15"
                value={this.state.email_id}
                onChange={this.onChangeemail_id}
              />
            </div>

            <div>
              <label className="empnum20"> MobileNo</label>
              <input type="text"
                className="empnum16"
                value={this.state.MobileNo}
                onChange={this.onChangeMobileNo}
              />
            </div>

            <div className="form-group">
              <button type="submit" value="send" id="sendbttn" onClick={this.onSubmit}>Send</button>
              <button type="submit" className="resetbttn">Reset</button>
            </div>
          </form>
        </div>
        <div className="footer10">
          <Footer />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { SIno } = state.EmployeeReducer
  const { EmpId } = state.EmployeeReducer
  const { FirstName } = state.EmployeeReducer
  const { LastName } = state.EmployeeReducer
  const { Date_of_Birth } = state.EmployeeReducer
  const { Sex } = state.EmployeeReducer
  const { JoiningDate } = state.EmployeeReducer
  const { email_id } = state.EmployeeReducer
  const { MobileNo } = state.EmployeeReducer

  return { SIno, EmpId, FirstName, LastName, Date_of_Birth, Sex, JoiningDate, email_id, MobileNo }
}
export default connect(mapStateToProps, { questionHandle })(EmployeeTable);
