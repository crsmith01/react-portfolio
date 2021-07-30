import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Jumbotron>
          <h1>Hello, I'm Catherine!</h1>
          <p>
            Full Stack Web Developer. Librarian. Soprano. Shakespeare Nerd.
          </p>
          <Switch>
            {/* <Switch> Renders the first child <Route> or <Redirect> that matches the location. <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively. */}
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            {/* All other paths will lead home */}
            <Route path='/*' component={Home} />
          </Switch>
        </Jumbotron>
        <Footer />
      </div>
    </Router>
  );
}

export default App;