import React, { Component } from 'react';

class LoginComponent extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section className="sign-in">
                    <div className="customcontainer">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src={process.env.PUBLIC_URL + "assets/images/signin-image.jpg"} alt="sign up"/></figure>
                                <a href="#" className="signup-image-link">Create an account</a>
                            </div>

                            <div className="signin-form">
                                <h2 className="form-title">Login</h2>
                                <form method="POST" className="register-form" id="login-form">
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
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
            );
    }
}

export default LoginComponent;