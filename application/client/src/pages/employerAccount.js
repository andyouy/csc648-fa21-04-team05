import React, { useState } from 'react';
import {  useHistory } from "react-router-dom";

import axios from 'axios';


function CreateEmployerAccount () {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [userIDError, setUserIDError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const checkFullName = async () => {
        if(fullName === ''){
            setFullNameError('Business name is required')
        }else{
            setFullNameError('')
        }
    }

    const checkEmail = async () => {
        if(email === ''){
            setEmailError('Email is required')
        }else{
            setEmailError('')
        }
    }

    const checkUsername = async () => {
        if(userID === ''){
            setUserIDError('Username is required')
        }else{
            setUserIDError('')
        }
    }

    const checkPassword = async () => {
        if(password === ''){
            setPasswordError('Password is required')
        }else{
            setPasswordError('')
        }
    }
    
    const checkConfirmPassword = async () => {
        if(confirmPassword === ''){
            setConfirmPasswordError('Please reenter your password')
        }else{
            setConfirmPasswordError('')
        }
    }

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
                setConfirmPasswordError("passwords do not match")
            } else if(error.response.data === "Password must contain certain values"){
                console.log("passwords needs 1 Capital letter, 1 number, and 1 special character")
                setPasswordError("passwords require 1 Capital letter, 1 number, and 1 special character")
            } else if(error.response.data === "Username is already taken") {
                console.log("Username is already taken")
                setUserIDError("Username is already taken")
            } else if(error.response.data === "Account already exists") {
                console.log("Email already in use")
                setEmailError("Email is already in use")
            }
        })
    }
    
    return (
<div className="content-wrap">
    <form onSubmit={submitHandler}>
        <h1>Create Company Account</h1>

        <label>
            Business Name:
            <input
            name="Full Name"
            placeholder='Full Name'
            type='text'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            onBlur={checkFullName}
             />
        </label>
        {fullNameError ? <p className="error">{fullNameError}</p> : null}
        <label>
            Email Address:
        <input
        name="Email Address"
        placeholder='Email Address'
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
        onBlur={checkEmail}
        />
        </label>
        {emailError ? <label className="error">{emailError}</label> : null}
        <label>
            User ID:
            <input
            name="User ID"
            placeholder='User ID'
            type='text'
            value={userID}
            onChange={e => setUserID(e.target.value)}
            onBlur={checkUsername}
            />
        </label>
        {userIDError ? <label className="error">{userIDError}</label> : null}
        <label>
            Password:
            <input
            name="Password"
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={checkPassword}
            />
        </label>
        {passwordError ? <label className="error">{passwordError}</label> : null}
        <label>
            Confirm Password:
            <input
            name="Password"
            placeholder='Password'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            onBlur={checkConfirmPassword}
            />
        </label>
        {confirmPasswordError ? <label className="error">{confirmPasswordError}</label> : null}
        <button className="btn-submit">Create Account</button>
       
    
        </form>
        </div>
    );
}

export default CreateEmployerAccount;
