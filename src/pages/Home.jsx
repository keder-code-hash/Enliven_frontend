import React, { Component } from 'react';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='row' style={{height:"75vh"}}>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-5'>
                        <img id="logo" src={process.env.PUBLIC_URL + 'assets/images/logo/enliven_logo.gif'} alt="enliven logo"/>
                        <br/>
                        <br/>
                        <div className='text-center h4 text-white' id="intro">
                            <p>Tired of checking answer sheets <br/>manually? Go effortless with <b>enliven</b></p>
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
                    <h2>What is Enliven?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi necessitatibus neque obcaecati optio ducimus vitae culpa ipsum illum similique asperiores labore, inventore velit molestias corrupti perferendis aspernatur eius molestiae nobis.
                    </p>

                    <h2>What is Enliven?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi necessitatibus neque obcaecati optio ducimus vitae culpa ipsum illum similique asperiores labore, inventore velit molestias corrupti perferendis aspernatur eius molestiae nobis.
                    </p>

                </div>


            </React.Fragment>
        );
    }
}
 
export default Home;