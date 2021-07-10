import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
