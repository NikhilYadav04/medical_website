import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Homeopathy from './pages/Homeopathy';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/homeopathy" element={<Homeopathy />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
