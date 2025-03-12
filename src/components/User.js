import React from 'react';
const User=(props)=>{
    const user={
        name:'R.Jack',
        email:'jayaram8016@gmail.com',
        contact:9092532004,
        location:'Coimabtore'
    }
    return(
        
        <div>
            <p>PropsID:{props.id}</p>
            <p>Name:{user.name}</p>
            <p>Email Id:{user.email}</p>
            <p>Contact No:{user.contact}</p>
            <p>Location:{user.location}</p>
        </div>
    );

};
export default User;