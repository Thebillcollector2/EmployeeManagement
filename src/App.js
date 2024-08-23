import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/pages/header/Header';
import Dashboard from './components/pages/dashboard/Dashboard'; // Ensure this path is correct
import Nomatch from './components/pages/nomatch/Nomatch';
import { Postuser } from './components/pages/employee/Postuser';
import { UpdateUser } from './components/pages/employee/UpdateUser';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Postuser />} />
        <Route path="/employee/:id" element={<UpdateUser/>} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </>
  );
}

export default App;
