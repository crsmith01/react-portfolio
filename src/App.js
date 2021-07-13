import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron>
        <h1>Hello, I'm Catherine!</h1>
        <p>
          Full Stack Web Developer
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>      
      <Header />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
