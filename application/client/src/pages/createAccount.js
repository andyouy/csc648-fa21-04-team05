import React, { useEffect, useState } from 'react';
import './createAccount.css';

import axios from 'axios';


function CreateAccount () {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = async (e) => {
        await axios.post('/newAccount', {
          fullName,
          email,
          userID,
          password,
        });
    }
    
    const [users, setUsers] = useState("");

    const getUsers = () => {
        axios.get('/getAllUsers')
        .then((response) => {
            console.log(response);
            const listOfUsers = response.data;
            setUsers(listOfUsers)
        })
    }

    useEffect(() => getUsers(), [])

    return (

    <form onSubmit={submitHandler}>
        <h1>Create Account</h1>

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
        <button>Create Account</button>
        <br/>
        
        <h1>Simple Get Request From Database</h1>
        <div>{JSON.stringify(users)}</div>
        </form>


    );
}

export default CreateAccount;