import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './auth.css';
import './util.css';
import './main.css';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
    </Routes>
  );
};

export default App;
