import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  document.body.style = 'background: #E8E4E1;';
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
      </Router>
    </div>
  );
}

export default App;
