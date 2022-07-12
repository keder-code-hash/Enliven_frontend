import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="text-center text-lg-start mt-5">
                <div className="container p-4">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <p align="center">
                            <img src={process.env.PUBLIC_URL + "assets/images/logo/footer_enliven_logo.png"} style={{width:"12rem", marginLeft:"-15px"}} />
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer text</h5>

                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                        aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>

                    </div>
                </div>
                </footer>
        );
    }
}
 
export default Footer;