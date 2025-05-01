// ✅ index.js - כולל תמיכה בנתיבי Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LiveBoard from './LiveBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/live" element={<LiveBoard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
