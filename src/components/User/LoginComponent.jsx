import React, { Component } from 'react';
import Form from '../Utils/Form';

class LoginComponent extends Component {
    state = {  } 
    subComponent = (<><a href="#" className="signup-image-link">Create an account</a></>)
    render() { 
        return (
            <React.Fragment>
                <section className="sign-in">
                    <Form
                        left="true"
                        imglink="assets/images/signin-image.jpg"
                        imgHeight="250px"
                        subComponent={this.subComponent}
                        title="Login"
                        endpoint="/"
                    >
                        <div className="form-group">
                            <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                            <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                            <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                        </div>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </Form>
                </section>
            </React.Fragment>
            );
    }
}

export default LoginComponent;