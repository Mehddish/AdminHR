import React from 'react';
import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Employee from './Employee';
import Activities from './Activities';
import Events from './Events';
import Holidays from './Holidays';
import Settings from './Settings';
import Accounts from './Accounts';

const Home = () => {
  return (
    
         <div className="container">
                <div className="row">
                    <Sidebar />
                </div>
                <div className="row">
                    <div className="col">
                        <Top />
                    </div>
                    <div className="col">
                        <Routes>
                            <Route path='/users' element={ <Users /> } />
                            <Route path='/employee' element={ <Employee /> } />
                            <Route path='/activities' element={ <Activities /> } />
                            <Route path='/events' element={ <Events /> } />
                            <Route path='/holidays' element={ <Holidays /> } />
                            <Route path='/accounts' element={ <Accounts /> } />
                            <Route path='/settings' element={ <Settings /> } />
                            <Route path='*' element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>
            </div>
  )
}

export default Home