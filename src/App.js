import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';




function App() {
  return (
    <div style={{
      backgroundImage: "linear-gradient(to bottom,#020024,#fff)",
      color: "darkred",
    }}>
      <Router>
            <Routes>
                <Route path='*' element={ <Home /> } />
                <Route path='/login' element={ <Login /> } />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
