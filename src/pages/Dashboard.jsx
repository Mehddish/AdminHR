import React from 'react';
import { FaUserAlt, FaHotel, FaCalendar, FaIdCardAlt } from 'react-icons/fa';
import GeoChart from '../components/GeoChart';
import Growth from '../components/Growth';
import LineChart from '../components/LineChart';
import Project from '../components/Project';
import Revenue from '../components/RevenueChart';
import SalaryChart from '../components/SalaryChart';
import TrendChart from '../components/TrendChart';


const Dashboard = () => {
  return (
    <div className='d-container'>
      <div className="d-row">
        <h1 className='d-title'>Dashboard</h1>
      </div>

      <div className="d-row">
        <div className="d-groups">
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaUserAlt />
              <span className='d-subtitle'>Users</span>
            </div>
          </div>
          <div className="d-group">
              <div className="d-badge">0</div>
              <div className="d-content">
                  <FaHotel />
                  <span className='d-subtitle'>Holidays</span>
              </div>
          </div>
          <div className="d-group">
              <div className="d-badge">0</div>
              <div className="d-content">
                  <FaCalendar />
                  <span className='d-subtitle'>Events</span>
              </div>
          </div>
          <div className="d-group">
              <div className="d-badge">0</div>
              <div className="d-content">
                  <FaIdCardAlt />
                  <span className='d-subtitle'>Accounts</span>
              </div>
          </div>
        </div>
      </div>
      <div className="d-row">
        <div className="d-charts">
            <div className="d-chart">
              <SalaryChart />
            </div>

            <div className="d-chart">
              <Revenue />
            </div>
            <div className="d-chart">
              <LineChart />
            </div>
          </div>
          <div className="d-projects">
            <Project />
          </div>
      </div>
    </div>
  )
}

export default Dashboard