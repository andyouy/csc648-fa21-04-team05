import React, { useState } from "react";


function ProfilePage() {

const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
const [bio, setBio] = useState('');

//submitHandler needed here



return(
//need to add name, username, and email address from the created user
//these values need to be able to be changed

  <div className="content-wrap">
      <h1>My Profile</h1>
    







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
    
<button>Save Changes</button>



  </div>
    );
}

export default ProfilePage;
