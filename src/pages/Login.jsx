import React, { Component } from 'react';
import LoginComponent from "../components/User/LoginComponent";

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{marginTop:"5rem", marginBottom:"5rem"}}>
                <LoginComponent/>
            </div>
        );
    }
}
 
export default Login;