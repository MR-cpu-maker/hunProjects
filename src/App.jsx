// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Show from './Components/Pages/Show';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/overview" element={<Show />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
