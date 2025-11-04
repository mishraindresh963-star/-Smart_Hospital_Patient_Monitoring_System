import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Monitor from './components/MonitoringForm';

function App(){
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <header style={{display:'flex', gap:12, marginBottom:20}}>
        <h2>Smart Hospital</h2>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/login">Login</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/monitor" element={<Monitor/>} />
      </Routes>
    </div>
  );
}

export default App;
