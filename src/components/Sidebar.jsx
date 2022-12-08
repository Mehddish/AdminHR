import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className='s-container'>
        <div className="s-row">
            <img className='s-logo' src={logo} alt="logo" />
            <h2 className='s-name'>Huawei HR</h2>
        </div>
        <div className="s-row">
            <div className="s-groups">
                <div className="s-group">
                    <NavLink to='/'  className='s-link' activeclassname='active'>Dashboard</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to='/users'  className='s-link' activeclassname='active'>Users</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to='/employee'  className='s-link' activeclassname='active'>Employee</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to='/activities'  className='s-link' activeclassname='active'>Activities</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to='/events'  className='s-link' activeclassname='active'>Events</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to='/holidays'  className='s-link' activeclassname='active'>Holidays</NavLink>
                </div>
                <div className="s-group">
                    <NavLink to='/accounts'  className='s-link' activeclassname='active'>Accounts</NavLink>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Sidebar