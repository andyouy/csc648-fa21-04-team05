import React, { useState } from 'react';

import axios from 'axios';


function CreateEmployerAccount () {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
<<<<<<< HEAD:application/client/src/pages/createAccount.js
        await axios.post('/api/newAccount', {
=======
        await axios.post(`/newAccount`, {
>>>>>>> development:application/client/src/pages/employerAccount.js
          fullName,
          email,
          userID,
          password,
        });
    }
    
<<<<<<< HEAD:application/client/src/pages/createAccount.js
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

=======
>>>>>>> development:application/client/src/pages/employerAccount.js
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
            />
        </label>
        <button>Create Employer Account</button>
       
    
        </form>
    
    );
}

<<<<<<< HEAD:application/client/src/pages/createAccount.js
export default CreateAccount;
=======
export default CreateEmployerAccount;
>>>>>>> development:application/client/src/pages/employerAccount.js
