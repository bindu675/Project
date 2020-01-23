import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import LeaveForm from './Components/LeaveForm/LeaveForm';
import LeaveSummary from './Components/LeaveSummary/LeaveSummary';
import Admin from './Components/Admin/Admin';
import LeaveDirectory from './Components/LeaveDirectory/LeaveDirectory';
import AdminLogin from './Components/Admin/AdminLogin';
import LoginPage from './Components/LoginPage';
import EmployeeTable from './Components/employeedetails/EmployeeTable';
import EmployeeList from './Components/employeedetails/EmployeeList';
import Calender from './Components/Calender/Calender';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
        <Redirect to={{ pathname: '/', state: { from: props.location }, }} />)
    )}
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path='/' component={LeaveForm}></Route>
          <PrivateRoute exact path='/HomePage' component={HomePage}></PrivateRoute>
          <PrivateRoute exact path='/LeaveForm' component={LeaveForm}></PrivateRoute>
          <Route exact path='/LeaveSummary' component={LeaveSummary}></Route>
          <Route exact path='/Admin' component={Admin}></Route>
          <Route exact path='/AdminLogin' component={AdminLogin}></Route>
          <Route exact path='/LeaveDirectory' component={LeaveDirectory}></Route>
          <Route exact path='/LoginPage' component={LoginPage}></Route>
          <Route exact path='/EmployeeList' component={EmployeeList}></Route>
          <Route exact path='/EmployeeTable' component={EmployeeTable}></Route>
          {/* <Route exact path='/Calender' component={Calender}></Route> */}

        </switch>
      </Router>
    </div>
  );
}

export default App;
