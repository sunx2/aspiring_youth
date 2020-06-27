import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div id="home-main">
                <h1 id="home-title">Home Page</h1>
                <div id="home-container">
                    
                    <div className="home-item" id="login">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="home-item" id="dashboard">
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;