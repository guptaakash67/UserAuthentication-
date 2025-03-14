// src/components/Dashboard.jsx
import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">Dashboard</h2>
        <p>Welcome, {auth.currentUser.email}!</p>
        <button
          onClick={handleLogout}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;