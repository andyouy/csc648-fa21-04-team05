<<<<<<< HEAD:application/client/src/pages/createAccount.js
import React, { useEffect, useState } from 'react';
import {  useHistory } from "react-router-dom";
import './createAccount.css';
=======
import React, { useState } from 'react';
>>>>>>> frontend:application/client/src/pages/employeeAccount.js

import axios from 'axios';


function CreateEmployeeAccount () {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let history = useHistory();
    
    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('/api/newAccount', {
          fullName,
          email,
          userID,
          password,
          confirmPassword,
        }, {withCredentials:true})
        .then(response => {
            if(response.data === "Successfully created") {
                history.push('/')
            }
        })
        .catch(error => {
            console.log(error);
            if(error.response.data === "Passwords do not match") {
                console.log("passwords do not match")
            } else if(error.response.data === "Password must contain certain values"){
                console.log("passwords needs 1 Capital letter, 1 number, and 1 special character")
            } else if(error.response.data === "Username is already taken") {
                console.log("Username is already taken")
            } else if(error.response.data === "Account already exists") {
                console.log("Email already in use")
            }
        })
    }
    
    const [users, setUsers] = useState("");

    const getUsers = () => {
        axios.get('/api/getAllUsers')
        .then((response) => {
            console.log(response);
            const listOfUsers = response.data;
            setUsers(listOfUsers)
        })
    }

    useEffect(() => getUsers(), [])

    return (

    <form onSubmit={submitHandler}>
        <h1>Create Employee Account</h1>

        <label>
            Full Name:
            <input
            name="Full Name"
            placeholder='Full Name'
            type='text'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
             />
        </label>
        <label>
            Email Address:
        <input
        name="Email Address"
        placeholder='Email Address'
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        </label>
        <label>
            User ID:
            <input
            name="User ID"
            placeholder='User ID'
            type='text'
            value={userID}
            onChange={e => setUserID(e.target.value)}
            />
        </label>
        <label>
            Password:
            <input
            name="Password"
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
<<<<<<< HEAD:application/client/src/pages/createAccount.js
            />
        </label>
        <label>
            Confirm Password:
            <input
            name="confirmPassword"
            placeholder='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            />
        </label>
        <button>Create Account</button>
        <br/>
        
        <h1>Simple Get Request From Database</h1>
        <div>{JSON.stringify(users)}</div>
=======
            />
        </label>
        <button>Create Employee Account</button>
       
    
>>>>>>> frontend:application/client/src/pages/employeeAccount.js
        </form>


    );
}

export default CreateEmployeeAccount;