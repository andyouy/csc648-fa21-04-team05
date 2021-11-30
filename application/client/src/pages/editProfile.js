import React, { useEffect, useState } from 'react';
import {  useHistory, useParams } from "react-router-dom";
import axios from 'axios';

function ProfilePage() {

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [userID, setUserID] = useState('');
const [password, setPassword] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
const [bio, setBio] = useState('');


const {username} = useParams();

const [error, setError] = useState('');

let history = useHistory();

//submitHandler needed here
const submitHandler = async (e) => {
    e.preventDefault();
    axios.put(`/api/editProfile`, {
        email,
        userID,
        phoneNumber,
        address,
        bio
    })
    .then(response => {
        if(response){
            // refreshes page on click
            alert("Succesfully edited!")
            history.go(0)
            // return list;
        }
    })
    .catch(error => {
        console.log(error.response.data)
        if(error.response.data === "invalid phone number"){
            alert("Please enter a valid phone number");
        }
    });
}

useEffect(() => {
    console.log(username)
    axios.post("/api/getEditedProfile", {
        username: username
    })
    .then((response) => {
        setFullName(response.data.name)
        setEmail(response.data.email)
        setUserID(response.data.username)
        setPhoneNumber(response.data.phone)
        setAddress(response.data.address)
        setBio(response.data.bio)

        })
    }, []);

return(
//need to add name, username, and email address from the created user
//these values need to be able to be changed

  <div className="content-wrap">
      <h1>My Profile</h1>
    <label>
    Name:
    <input
    name="Name"
    placeholder="Name"
    type='text'
    value={fullName}
    onChange={e => setFullName(e.target.value)}
    disabled
/>
</label>
<label>
    Email Address:
    <input
    name="Email"
    placeholder="Email"
    type='text'
    value={email}
    onChange={e => setEmail(e.target.value)}
    disabled
/>
</label>
<label>
    Username:
    <input
    name="User ID"
    placeholder="Username"
    type='text'
    value={userID}
    onChange={e => setUserID(e.target.value)}
    disabled
/>
</label>
<label>
    Phone Number:
    <input
    name="Phone Number"
    placeholder="Phone Number"
    type='number'
    value={phoneNumber}
    onChange={e => setPhoneNumber(e.target.value)}
/>
</label>
<label>
    Address:
    <input
    name="Address"
    placeholder="Address"
    type='text'
    value={address}
    onChange={e => setAddress(e.target.value)}
/>
</label>
<label>
    Bio:
    <input
    name="Bio"
    placeholder="Bio"
    type='text'
    value={bio}
    onChange={e => setBio(e.target.value)}

/>
</label>
    
<button onClick={submitHandler}>Save Changes</button>



  </div>
    );
}

export default ProfilePage;
