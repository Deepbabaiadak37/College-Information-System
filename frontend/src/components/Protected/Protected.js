import React,{useEffect, useState}  from 'react';

import {Redirect, useHistory} from 'react-router-dom';
function Protected(props) 
{
    const history=useHistory();
    let Component=props.cmp;
    useEffect(() => {
        if(!localStorage.getItem("token"))
            history.push('/');
        
      },[]);

  return (
         <div>
            <Component/>
         </div>      
          
          );
}

export default Protected;
