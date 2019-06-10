import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import './logoStyle.css'
import './headerStylesheet.css'



class Header extends Component {
    state = {}
    render() {
        return (
            <div className='default'>
            <img src = {logo} alt="logo" className='logoStyle' />
            <p className='textStyle'><span className='textcolorone'>Aspiring</span><span className='textcolortwo'>Youth</span></p>
            </div>
        );
    }
}


export default Header;