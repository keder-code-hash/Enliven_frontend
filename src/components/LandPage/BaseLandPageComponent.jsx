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
                <div className='row' style={{position: "relative",
  top:"15vh"}}>
                     <div className='col-sm-1'></div>
                    <div className='col-sm-5'>
                        <img id="logo" src={process.env.PUBLIC_URL + 'assets/images/logo/enliven_logo.gif'} alt="enliven logo"/>
                        <br/>
                        <br/>
                        <div className='text-center h4 text-white'>
                            We believe <b>Education is Must to All</b>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default BaseLandPageComponent;