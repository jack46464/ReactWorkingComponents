import React from 'react';

const WrapFile=()=>{
    const user={
        company:'WDSI',
        currentCity:'Chennai'
    }
    return(
        
        <div>
            <p>Name:{user.company}</p>
            <p>Email Id:{user.currentCity}</p>
    
        </div>
    );

};
export default WrapFile;