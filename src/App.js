import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Banner heading='Om Sai Enterprises' message="We live and enjoy to contribute in your SUCCESS!." />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </Router>
    <>
      <Navbar />
      <Banner heading='Om Sai Enterprises' message="We live and enjoy to contribute in your SUCCESS!." />
      <About />
    </>
  );
}

export default App;
