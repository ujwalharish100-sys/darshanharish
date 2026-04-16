import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NumberBoxes from './components/NumberBoxes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NumberBoxes />
      <Footer />
    </div>
  );
}

export default App;
