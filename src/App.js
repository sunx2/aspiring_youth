import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true
      }
    }
  }
}


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Particles 
        className='particles'
        params={particlesOptions}
      />
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
      </Router>
    </div>
  );
}

export default App;
