import React, { Component } from 'react';
import '../css/get-started-button.css';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='row' style={{height:"75vh", paddingTop:"20px"}}>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-5 text-center'>
                        <img id="logo" src={process.env.PUBLIC_URL + 'assets/images/logo/enliven_logo.gif'} alt="enliven logo"/>
                        <br/>
                        <br/>
                        <div className='text-center h4 text-white' id="intro">
                            <p>
                            Tired of checking answer sheets manually? <br/>Go effortless with <b>enliven</b><br/><br/>
                            <button className="get-started">Get Started</button>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <img id="landing_image" src={process.env.PUBLIC_URL + "assets/images/Online test rmbg.gif"} alt="landing" width="700vw"/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="container" id="about-enliven">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>We believe</h3>
                            <h2><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chat-left-quote" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg> &nbsp;
                                Education is Must to All</h2>
                            <p>
                            Enliven is a system to put that belief in action. It makes assessing students easier than ever. Enliven provides top notch user experience for both student and teacher
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <img id="edu-for-all" src={process.env.PUBLIC_URL + "assets/images/education-for-all.png"} alt="education for all"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            
                        </div>
                        <div className="col-sm-6">
                            <h2>What's New ?</h2>
                            <p>Enliven is capable of evaluating students based on Short Answer type Questions along with Multiple choice questions. This opens up a whole new world to the assessor taking the assessment</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}
 
export default Home;