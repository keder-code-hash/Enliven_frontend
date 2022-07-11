import React, { Component } from 'react'

class BaseLandPageComponent extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="preloader">
                    <div className="loader_34">
                        <div className="ytp-spinner">
                            <div className="ytp-spinner-container">
                                <div className="ytp-spinner-rotator">
                                    <div className="ytp-spinner-left">
                                        <div className="ytp-spinner-circle"></div>
                                    </div>
                                    <div className="ytp-spinner-right">
                                        <div className="ytp-spinner-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img id="logo" src={process.env.PUBLIC_URL + 'assets/images/logo/enliven_logo.gif'} alt="enliven logo"/>
            </React.Fragment>
        );
    }
}
 
export default BaseLandPageComponent;