import axios from "axios";
import React, { useState } from "react";

function Login () {

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        await axios.post(`/loginAccount`, {
          userID,
          password,
        });
    }

    return(   
    <form onSubmit={loginHandler}>
            <h1>Login</h1>
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
    <button>Login</button>

    </form>
        

    )
}


export default Login;