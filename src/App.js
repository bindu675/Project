import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaveForm from './Components/LeaveForm/LeaveForm';
import LeaveSummary from './Components/LeaveSummary/LeaveSummary';

function App() {
  return (
    <div className="App">
    <Router>
        <switch> 
            <Route exact path='/' component={LoginPage}></Route> 
            <Route exact path='/HomePage' component={HomePage}></Route>
            <Route exact path='/LeaveForm' component={LeaveForm}></Route>
            <Route exact path='/LeaveSummary' component={LeaveSummary}></Route>  
  

        </switch>
      </Router>
    </div>
  );
}

export default App;
