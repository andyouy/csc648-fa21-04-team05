import React, { useState } from 'react';
import axios from 'axios';
import {  useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Login ({ updateUserState,updateLoginState}) {

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const loginHandler = (event) => {
        event.preventDefault();
            
            axios.post('/api/login', {
                    username: userID,
                    password: password


                },{withCredentials:true})
                .then(response => {
                    if(response.data){
                        updateUserState(response.data.username);
                        updateLoginState("true");
                        setLoading(!loading)

                        if(response.data.type === 1) {
                            history.push('/employerDashboard')
                        } else {
                            history.push('/employeeDashboard')
                        }
                    }
                })
                .catch(error => {
                    if(error.response.data === "username and password cannot be left empty"){
                        setLoading(!loading)
                        console.log("please enter a username and password");
                    } else if (error.response.data === "user does not exist"){
                        setLoading(!loading)
                        console.log("please enter a valid username");
                    } else if (error.response.data === "incorrect password"){
                        setLoading(!loading)
                        console.log("please enter a correct password");
                    }
                })
    }

    return(
        <div className="content-wrap">
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

                <br/>

                <button onClick={() => setLoading(true)}>Login</button>
                <ClipLoader loading={loading} size={150} />

            </form>
        </div>


    )
}


export default Login;