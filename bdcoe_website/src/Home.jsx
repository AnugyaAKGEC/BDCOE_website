import React from 'react'
import logo from './assets/logoHD.png'
import './App.css'

const Home = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                
                <img src={logo} />
                <span>BDCOE</span>
            </div>
            <div className="menu">
                <ul>
                    <li>About</li>
                    <li>Events</li>
                    <li>Domains</li>
                    <li>Team</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="register">
                <h3>REGISTER</h3>
            </div>
        </div>
    </div>
  )
}

export default Home