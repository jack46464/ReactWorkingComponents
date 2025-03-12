import React from 'react';
import withLoader  from './withLoader';
import user from './User';

const UserWithLoader=withLoader(user);
function HocComponent(){
    return(
       <div>
       <UserWithLoader id={2004}/>
       </div> 
    )
}
export default HocComponent;