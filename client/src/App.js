import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Haggle</h1>
      <Link to='/dashboard'>Dashboard</Link>
      {/* <div className='homepage'>
        <Login />
        <Signup />
      </div> */}

      <main>
        <Route exact path='/dashboard' component={Dashboard}/>
      </main>
      
    </div>
  );
}

export default App;
