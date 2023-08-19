import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
// import Search from '../Search/Search';

const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route exact path="search" element={<Search/>}/> */}
      </Routes>
    </Router>

  );
};


export default App;
