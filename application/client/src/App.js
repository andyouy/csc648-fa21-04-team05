import React from 'react';
import { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import "./pages/aboutUs"
import './App.css';

import Home from './pages/home';
import aboutUs from './pages/aboutUs';
import createAccount from './pages/createAccount';
import Login from './pages/login';
import axios from 'axios';

function App() {
  const [loggedInUser,setloggedInUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);


  function updateLoginState(data){
    setLoggedIn(data);
  }

  function updateUserState(user){
    setloggedInUser(user)
  }

  return (

    <div className="App">
    <h1> Shyft </h1>
 
    <Router>
    <Navbar loggedIn={loggedIn} updateUserState={updateUserState} updateLoginState={updateLoginState} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutUs' exact component={aboutUs}/>
        <Route path='/createAccount' exact component={createAccount}/>
        <Route exact path='/login'> <Login updateLoginState={updateLoginState} updateUserState={updateUserState}/> </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
