import React, { Component } from 'react';
import '../../css/footer.css'

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <footer className="text-center text-lg-start mt-5">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About Us</h5>

                            <p>
                            We are <b>Sudoers</b>, a passionate team of three members focused on developing software based solutions for various problems.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-8 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Members</h5>
                            <ul className="list-unstyled">
                                <li><a href="http://keder-nath-mallick.netlify.app/" className="py-1 d-block" target={"_blank"}>Keder Nath Mallick</a></li>
                                <li><a href="https://purnadip-manna.github.io/" className="py-1 d-block" target={"_blank"}>Purnadip Manna</a></li>
                                <li><a href="https://arghyasahoo.netlify.app/" className="py-1 d-block" target={"_blank"}>Arghya Sahoo</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-8 mb-4 mb-md-0">
                            <p align="center">
                                <img src={process.env.PUBLIC_URL + "assets/images/logo/footer_enliven_logo.png"} style={{width:"12rem", marginLeft:"-15px"}} alt="logo"/>
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
            <p className='footerbar'>Copyright ©2022 All rights reserved | Sudoers</p>
            </React.Fragment>
        );
    }
}
 
export default Footer;