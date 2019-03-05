import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Tax from './components/Tax';	
import Job from './components/Job';	

class App extends Component {

  render() {
	  
	  return (
      <div className="container">      
      <h2>King React JS Demo</h2>
      
      <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light mr-auto">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Services
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/job">Employment</a>
            <a className="dropdown-item" href="/tax">Income Tax</a>
          </div>
        </li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
      </ul>
      </nav>
      
      <Form inline>
      <FormControl type="text" placeholder="Search Canada.ca" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
      </Form>
     
	  </Navbar.Collapse>
	  </Navbar>
      
 	        <div>
	          <Switch>
	            <Route exact path="/"  component={Home} />
	            <Route path="/job" component={Job} />
	            <Route path="/tax" component={Tax} />		
	            <Route path="/about" component={About} />
	            <Redirect to="/" />
	          </Switch>
	        </div>
      </div>
    );
  }
}

export default App;

