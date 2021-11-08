import React from 'react';
import { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./pages/aboutUs"
import './assets/App.css';

import Home from './pages/home';
import aboutUs from './pages/aboutUs';
import MainCreateAccount from './pages/mainCreateAccount';
import Login from './pages/login';

import James from './pages/AboutUs/James';
import Mohammad from './pages/AboutUs/Mohammad';
import Ana from './pages/AboutUs/Ana';
import Andy from './pages/AboutUs/Andy';
import Courtney from './pages/AboutUs/Courtney';

import EmployerDashboard from './pages/employerDashboard';
import CreateEmployeeAccount from './pages/employeeAccount';
import CreateEmployerAccount from './pages/employerAccount';
import CreateShyft from './pages/createShyft';


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
        <Route path='/aboutUs' component={aboutUs}/>
        <Route path='/James' component={James}></Route>
        <Route path='/Mohammad' component={Mohammad}></Route>
        <Route path='/Ana' component={Ana}></Route>
        <Route path='/Andy' component={Andy}></Route>
        <Route path='/Courtney' component={Courtney}></Route>
        <Route path='/login' component={Login}/>
        
        <Route path='/mainCreateAccount' component={MainCreateAccount}></Route>
        <Route path='/employeeAccount' component={CreateEmployeeAccount}></Route>
        <Route path='/employerAccount' component={CreateEmployerAccount}></Route>
        <Route path='/employerDashboard' component={EmployerDashboard}></Route>
        <Route path='/createShyft' component={CreateShyft}></Route>


      </Switch>

    </Router>
    <Footer />
    </div>
  );
}

export default App;
