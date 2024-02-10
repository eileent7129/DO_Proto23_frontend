import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';

import { BACKEND_URL } from '../../constants';
import './App.css';

const USER_ENDPOINT = `${BACKEND_URL}`;


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="Users" element={<Users/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;