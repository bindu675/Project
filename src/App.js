import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaveForm from './Components/LeaveForm/LeaveForm';
import LeaveSummary from './Components/LeaveSummary/LeaveSummary';
import EmployeeDirectory from './Components/EmployeeDirectory/EmployeeDirectory';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import LeaveDirectory from './Components/LeaveDirectory/LeaveDirectory';
import AdminLogin from './Components/Admin/AdminLogin';




function App() {
  return (
    <div className="App">
    <Router>
        <switch> 
            <Route exact path='/' component={LoginPage}></Route> 
            <Route exact path='/HomePage' component={HomePage}></Route>
            <Route exact path='/LeaveForm' component={LeaveForm}></Route>
            <Route exact path='/LeaveSummary' component={LeaveSummary}></Route> 
            <Route exact path='/EmployeeDirectory' component={EmployeeDirectory}></Route> 
            <Route exact path='/Admin' component={Admin}></Route>
            <Route exact path='/AdminLogin' component={AdminLogin}></Route>
            <Route exact path='/LeaveDirectory' component={LeaveDirectory}></Route> 
            <Route exact path='/User' component={User}></Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
