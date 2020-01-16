import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
import {questionHandle} from '../../Action/DesktopAction';
import {connect} from 'react-redux'

class MiscellaneousTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    SINO: '',
    EmpId:'',
    FirstName:'',
    LastName:'',
    Date_of_Birth:'',
    Sex:'',
    JoiningDate:'',
    email_id:'',
    MobileNo:''
    
    }
    }
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    
    onChangeSINO=(e)=> {
    this.setState({
    SINO: e.target.value
    }) 
    }
    
    onChangeEmpId=(e)=> {
    this.setState({
    EmpId: e.target.value
    }) 
    }
    onChangeFirstName=(e)=> {
    this.setState({
      FirstName: e.target.value
    }) 
    }
    onChangeLastName=(e)=> {
      this.setState({
        LastName: e.target.value
      }) 
      }
    onChangeDate_of_Birth=(e)=> {
      this.setState({
        Date_of_Birth: e.target.value
      }) 
      }
    onChangeSex=(e)=> {
      this.setState({
        Sex: e.target.value
      }) 
      }
    onChangeJoiningDate=(e)=> {
      this.setState({
        JoiningDate: e.target.value
      }) 
      }
    onChangeemail_id=(e)=> {
      this.setState({
        email_id: e.target.value
      }) 
      }
    onChangeMobileNo=(e)=> {
      this.setState({
        MobileNo: e.target.value
      }) 
      }
    
    onSubmit=(e)=> {
    debugger
    e.preventDefault();
    const payload = {
    SINO: this.state.SINO,
    EmpId: this.state.EmpId,
    FirstName: this.state.FirstName,
    LastName: this.state.LastName,
    Date_of_Birth: this.state.Date_of_Birth,
    Sex:this.state.Sex,
    JoiningDate:this.state.JoiningDate,
    email_id:this.state.email_id,
    MobileNo:this.state.MobileNo
    };
    
    this.props.questionHandle(payload);
    BrowserHistory.push('./Desktopform'); 
    }
     render() {
       return (
        <div>

        <div>
          <Navbar/>
        </div>

      <div className="desktopimg" style={{ marginTop: 10 }}>
      <form onSubmit={this.onSubmit} className="deskform">

      <div>
      <label className="name">SINO: </label>
      <input type="text" 
      className="width"
      value={this.state.SINO}
      onChange={this.onChangeSINO}
      />
      </div>

      <div>
      <label className="name"> EmpId:</label>
      <input type="text" 
      className="width"
      value={this.state.EmpId}
      onChange={this.onChangeEmpId}
      />
      </div>

      <div>
      <label className="name"> FirstName:</label>
      <input type="text" 
      className="width"
      value={this.state.FirstName}
      onChange={this.onChangeFirstName}
      />
      </div>

      <div>
      <label className="name"> LastName:</label>
      <input type="text" 
      className="width"
      value={this.state.LastName}
      onChange={this.onChangeLastName}
      />
      </div>

      <div>
      <label className="name"> Date_of_Birth:</label>
      <input type="text" 
      className="width"
      value={this.state.Date_of_Birth}
      onChange={this.onChangeDate_of_Birth}
      />
      </div>

      <div>
      <label className="name"> Sex:</label>
      <input type="text" 
      className="width"
      value={this.state.Sex}
      onChange={this.onChangeSex}
      />
      </div>

      <div>
      <label className="name"> JoiningDate:</label>
      <input type="text" 
      className="width"
      value={this.state.JoiningDate}
      onChange={this.onChangeJoiningDate}
      />
      </div>

    <div>
    <label className="name"> email_id:</label>
    <input type="text" 
    className="width"
    value={this.state.email_id}
    onChange={this.onChangeemail_id}
    />
    </div>

    <div>
    <label className="name"> MobileNo:</label>
    <input type="text" 
    className="width"
    value={this.state.MobileNo}
    onChange={this.onChangeMobileNo}
    />
    </div>

    <div className="form-group">
    <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Send</button>
    <button type="submit" className="resetbta">Reset</button> 
    </div>
    </form>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    )
    }
    }
    const mapStateToProps=(state)=>{
      const {SINO}=state.DesktopReducer
      const {EmpId}=state.DesktopReducer
      const {FirstName}=state.DesktopReducer
      const {LastName}=state.DesktopReducer
      const {Date_of_Birth}=state.DesktopReducer
      const {Sex}=state.DesktopReducer
      const {JoiningDate}=state.DesktopReducer
      const {email_id}=state.DesktopReducer
      const {MobileNo}=state.DesktopReducer
      
  return {SINO,EmpId,FirstName,LastName,Date_of_Birth,Sex,JoiningDate,email_id,MobileNo}
  }
  export default connect(mapStateToProps,{questionHandle}) (MiscellaneousTable);



























