import React, { Component } from 'react';

import BaseLandPageComponent from '../components/LandPage/BaseLandPageComponent'
import NavbarComponent from "../components/Utils/NavbarComponent"

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavbarComponent/>
                <div className="background" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/background/background3_svg.svg'})`,
                    aspectRatio: 900 / 450,
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="container-fluid">
                        <BaseLandPageComponent/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;