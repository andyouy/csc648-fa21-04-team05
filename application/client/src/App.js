import React from 'react';
import { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './assets/App.css';

import Home from './pages/home';

import AboutUs from './pages/aboutUs';
import James from './pages/AboutUs/James';
import Mohammad from './pages/AboutUs/Mohammad';
import Ana from './pages/AboutUs/Ana';
import Andy from './pages/AboutUs/Andy';
import Courtney from './pages/AboutUs/Courtney';

import MainCreateAccount from './pages/mainCreateAccount';
import Login from './pages/login';

import EmployerDashboard from './pages/employerDashboard';
import EmployeeDashboard from './pages/employeeDashboard';
import CreateEmployeeAccount from './pages/employeeAccount';
import CreateEmployerAccount from './pages/employerAccount';
import Jaguar from './pages/AboutUs/Jaguar';
import CreateShyft from './pages/createShyft';
import EmployeeFind from './pages/employeeFind';
import EmployeeViews from './pages/employeeViews';
import EmployerViews from './pages/employerViews';
import EmployerShiftsClaimed from './pages/employerShiftsClaimed';
import EditShyft from './pages/editShyft';
import ProfilePage from './pages/editProfile';



function App() {
  const [loggedInUser,setloggedInUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);

  function updateLoginState(data){
    setLoggedIn(data);
  };

  function updateUserState(user){
    setloggedInUser(user)
  };

  useEffect(() => {
    const data = localStorage.getItem("loggedIn")
    if(data) {
      setLoggedIn(JSON.parse(data))
    }
    const newdata = localStorage.getItem("username")
    if(data) {
      setloggedInUser(JSON.parse(newdata))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn))
    localStorage.setItem("username", JSON.stringify(loggedInUser))
  });

  return (
    <div className="page-container">
    
      <Router>
        <Navbar loggedIn={loggedIn} loggedInUser={loggedInUser} updateUserState={updateUserState} updateLoginState={updateLoginState} />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/James' component={James}></Route>
          <Route path='/Mohammad' component={Mohammad}></Route>
          <Route path='/Ana' component={Ana}></Route>
          <Route path='/Andy' component={Andy}></Route>
          <Route path='/Courtney' component={Courtney}></Route>
          <Route path='/Jaguar' component={Jaguar}></Route>

          <Route path='/login'><Login updateUserState={updateUserState} updateLoginState={updateLoginState}/> </Route>
          
          <Route path='/mainCreateAccount' component={MainCreateAccount}></Route>
          <Route path='/employeeAccount' component={CreateEmployeeAccount}></Route>
          <Route path='/employerAccount' component={CreateEmployerAccount}></Route>
          <Route path='/employerDashboard' component={EmployerDashboard}></Route>
          <Route path='/employeeDashboard' component={EmployeeDashboard}></Route>
          <Route path='/createShyft' component={CreateShyft}></Route>


          <Route path='/employeeViews' component={EmployeeViews}></Route>
          <Route path='/employeeFind' component={EmployeeFind}></Route>
          <Route path='/employerViews' component={EmployerViews}></Route>
          <Route path='/employerShiftsClaimed' component={EmployerShiftsClaimed}></Route>

          <Route path='/editShyft/:id' component={EditShyft}></Route>
          <Route path='/userProfile/:username' component={ProfilePage}></Route>


        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
