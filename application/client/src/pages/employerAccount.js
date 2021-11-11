import React, { useState } from 'react';
import {  useHistory } from "react-router-dom";

import axios from 'axios';


function CreateEmployerAccount () {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/api/newEmployerAccount', {
          fullName,
          email,
          userID,
          password,
          confirmPassword
        }, {withCredentials:true})
        .then(response => {
            if(response.data === "Successfully created") {
                history.push('/login')
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
    
    return (
<div className="content-wrap">
    <form onSubmit={submitHandler}>
        <h1>Create Company Account</h1>

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
            />
        </label>
        <label>
            Confirm Password:
            <input
            name="Password"
            placeholder='Password'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            />
        </label>
        <button className="submit">Create Employer Account</button>
       
    
        </form>
        </div>
    );
}

export default CreateEmployerAccount;
