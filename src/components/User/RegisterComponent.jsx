import React, { Component } from 'react';
import '../../css/login-register.css'

class RegisterComponent extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section className="signup">
                    <div className="customcontainer">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" className="register-form" id="register-form">
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src={process.env.PUBLIC_URL + "assets/images/signup-image.jpg"} alt="sign up"/></figure>
                                <a href="#" className="signup-image-link">I am already a member</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
            );
    }
}
 
export default RegisterComponent;