import React from 'react';
import {Link} from 'react-router-dom';
import { FaCog, FaLock } from 'react-icons/fa';

const Top = () => {
  return (
    <div className='t-container'>
      <div className="t-row">
        <div className="t-link">
          <Link to='/settings' className='t-settings'><FaCog />Settings</Link>
          <span className='t-logout'><FaLock />Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Top