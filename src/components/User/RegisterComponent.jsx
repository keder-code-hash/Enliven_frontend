import React, { Component } from 'react';
import Form from '../Utils/Form';

class RegisterComponent extends Component {
    state = {  } 
    subComponent = (<><a href="#" className="signup-image-link">I am already a member</a></>)
    render() { 
        return (
            <React.Fragment>
                <section className="signup">
                <Form
                    imglink="assets/images/signup-image.jpg"
                    imgHeight="250px"
                    subComponent= {this.subComponent}
                    title="Sign up"
                    endpoint="/"
                    formid="register-form"
                >
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
                </Form>
                </section>
            </React.Fragment>
            );
    }
}
 
export default RegisterComponent;