// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import Todo from './components/Todo';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    const fetchUserAccounts = async () => {
      try {
        // Fetch user accounts from the dummy API
        const response = await fetch('https://panorbit.in/api/users.json');

        if (!response.ok) {
          throw new Error('Failed to fetch user accounts');
        }

        const data = await response.json();
        // Update the userAccounts state with the fetched data
        setUserAccounts(data.users);
      } catch (error) {
        console.error('Error fetching user accounts:', error);
      }
    };

    fetchUserAccounts();
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Sidebar Menu */}
        <Sidebar />
        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage setSelectedUser={setSelectedUser} userAccounts={userAccounts} />} />
            <Route path="/profile" element={<Profile selectedUser={selectedUser} userAccounts={userAccounts} setSelectedUser={setSelectedUser}/>} />
            <Route path="/posts" element={<Posts selectedUser={selectedUser} userAccounts={userAccounts} setSelectedUser={setSelectedUser} />} />
            <Route path="/gallery" element={<Gallery selectedUser={selectedUser} userAccounts={userAccounts} setSelectedUser={setSelectedUser} />} />
            <Route path="/todo" element={<Todo selectedUser={selectedUser} userAccounts={userAccounts} setSelectedUser={setSelectedUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
