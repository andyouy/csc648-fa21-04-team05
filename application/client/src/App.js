import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import "./pages/aboutUs"
import './App.css';

import Home from './pages/home';
import aboutUs from './pages/aboutUs';
import createAccount from './pages/createAccount';
import login from './pages/login';

function App() {
  return (

    <div className="App">
    <h1> Shyft </h1>
 
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutUs' exact component={aboutUs}/>
        <Route path='/createAccount' exact component={createAccount}/>
        <Route path='/login' component={login}/>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
