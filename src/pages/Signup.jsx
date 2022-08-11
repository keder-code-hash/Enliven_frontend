import React, { Component } from 'react';

import RegisterComponent from '../components/User/RegisterComponent';

class Signup extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{marginTop:"5rem", marginBottom:"5rem"}}>
                <RegisterComponent/>
            </div>
        );
    }
}
 
export default Signup;