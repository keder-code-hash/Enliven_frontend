import React, { Component } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { logOutUser } from '../../redux/actions/auth-action/logOutAction';

function LogOutComponent(){  
    const dispatch=useDispatch(); 
    dispatch(logOutUser())
    .then(res => {
        window.location="/"
    })
    .catch(err => { 
        alert(err);
    });  
    return (<h4>Logout</h4>); 
}
 
export default LogOutComponent;