import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
        <switch> 
            <Route exact path='/' component={LoginPage}></Route> 
            <Route exact path='/HomePage' component={HomePage}></Route> 
        </switch>
      </Router>
    </div>
  );
}

export default App;
