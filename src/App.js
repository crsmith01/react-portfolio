import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
  // Link
} from "react-router-dom";
import './App.css';
import NavBar from './components/layout/NavBar';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router> 
      <div className="App">
        <NavBar /> 
        {/* <Jumbotron> */}
          <Switch>
            {/* <Switch> Renders the first child <Route> or <Redirect> that matches the location. <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively. */}
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            {/* All other paths will lead home */}
            <Route path='/*' component={Home} />
          </Switch>
        {/* </Jumbotron> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;